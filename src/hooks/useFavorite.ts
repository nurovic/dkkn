import {
  useMutation,
  useQueryClient,
  UseMutationResult
} from "@tanstack/react-query";
import { FavoriteToggle } from "../service/FavoriteService";
import type { FavoriteToggleType } from "../types/favorite";
import type { Product } from "../types/product";

export const useFavoriteToggle = (): UseMutationResult<
  void,
  unknown,
  FavoriteToggleType,
  { previousData?: Product[]; previousFavorites?: Product[] }
> => {
    console.log("Favori Query");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (body: FavoriteToggleType) => FavoriteToggle(body),

    onMutate: async (
      variables: FavoriteToggleType
    ): Promise<{ previousData?: Product[]; previousFavorites?: Product[] }> => {
      await queryClient.cancelQueries({ queryKey: ["products"] });
      await queryClient.cancelQueries({ queryKey: ["favorites"] });

      const previousData =
        queryClient.getQueryData<Product[]>(["products"]) ?? [];
      const previousFavorites =
        queryClient.getQueryData<Product[]>(["favorites"]) ?? [];

      queryClient.setQueryData<Product[]>(["products"], (oldData) => {
        if (!oldData || !Array.isArray(oldData)) return oldData;
        return oldData.map((product) =>
          product._id === variables.productId
            ? { ...product, isFavorite: !product.isFavorite }
            : product
        );
      });

      queryClient.setQueryData<Product[]>(["favorites"], (oldFavorites) => {
        if (!oldFavorites || !Array.isArray(oldFavorites)) return oldFavorites;

        const isAlreadyFavorite = oldFavorites.some(
          (fav) => fav._id === variables.productId
        );

        if (isAlreadyFavorite) {
          return oldFavorites.filter((fav) => fav._id !== variables.productId);
        } else {
          const toggledProduct = previousData.find(
            (prod) => prod._id === variables.productId
          );
          return toggledProduct
            ? [...oldFavorites, { ...toggledProduct, isFavorite: true }]
            : oldFavorites;
        }
      });

      return { previousData, previousFavorites };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
        refetchType: "active"
      });
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
        refetchType: "active"
      });
    },

    onError: (_error, _variables, context) => {
        if (context?.previousData) {
          queryClient.setQueryData(["products"], context.previousData);
        }
        if (context?.previousFavorites) {
          queryClient.setQueryData(["favorites"], context.previousFavorites);
        }
      },
    });

  return mutation;
};
