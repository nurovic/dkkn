import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import { FavoriteToggle } from "../service/FavoriteService";
import type { FavoriteToggleType } from "../types/favorite";
import type { Product } from "../types/product";


export const useFavoriteToggle = (): UseMutationResult<
  void,
  unknown, 
  FavoriteToggleType, 
  { previousData?: Product[] }
> => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (body: FavoriteToggleType) => FavoriteToggle(body),

    onMutate: async (variables:FavoriteToggleType): Promise<{ previousData?: Product[] }> => {
      await queryClient.cancelQueries({ queryKey: ["products"] });

      const previousData = queryClient.getQueryData<Product[]>(["products"]) ?? [];

      queryClient.setQueryData<Product[]>(["products"], (oldData) => {
        if (!oldData || !Array.isArray(oldData)) return oldData; 
        return oldData.map((product) =>
          product._id === variables.productId ? { ...product, isFavorite: !product.isFavorite } : product
        );
      });

      return { previousData };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"], refetchType: "active" });
      console.log("Favori durumu güncellendi!");
    },

    onError: (_error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["products"], context.previousData);
      }
    },
  });

  return mutation;
};