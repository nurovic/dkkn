
import {
  useMutation,
  useQueryClient,
  UseMutationResult,
  useQuery
} from "@tanstack/react-query";
import { AddToCart, GetCartList, UpdateCartProduct } from "../service/CartService";
import { AddToCartType, CartListType,UpdateCartQuantity } from "../types/cart";

export const useGetCartList = () => {
  const query = useQuery<CartListType, Error>({  
    queryKey: ["orderCart"],
    queryFn: () => GetCartList(),
    staleTime: 1000 * 60 * 5,
  });

  return {
    ...query,
    data: query.data || { items: [],  summary: { totalQuantity: 0, totalPrice: 0 } }
  };};

  export const useUpdateQuantity = (): UseMutationResult<CartListType, unknown, UpdateCartQuantity, { previousData?: CartListType }> => {
    const queryClient = useQueryClient();
  
    const mutation = useMutation<CartListType, unknown, UpdateCartQuantity, { previousData?: CartListType }>({
      mutationFn: (body: UpdateCartQuantity) => {
        return UpdateCartProduct(body);
      },
      
      onMutate: async (variables: UpdateCartQuantity): Promise<{ previousData?: CartListType }> => {
        await queryClient.cancelQueries({ queryKey: ["orderCart"] });
        const previousData = queryClient.getQueryData<CartListType>(["orderCart"]);
        
        queryClient.setQueryData(["orderCart"], (oldData: CartListType | undefined) => {
          if (!oldData) return oldData;
          
          return {
            ...oldData,
            items: oldData.items
              .map((item) => {
                if (item.productId === variables.productId) {
                  const newQuantity = item.quantity + variables.quantity;
                  // Remove item if new quantity is 0
                  return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
                }
                return item;
              })
              .filter(item => item !== null), // Filter out null items
          };
        });
  
        return { previousData };
      },
      
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["orderCart"],
          refetchType: "active",
        });
      },
      
      onError: (_error, _variables, context) => {
        if (context?.previousData) {
          queryClient.setQueryData(["orderCart"], context.previousData);
        }
      }
    });
  
    return mutation;
  };


  export const useAddToCart = (): UseMutationResult<
  CartListType, 
  Error,        
  AddToCartType
> => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (body: AddToCartType) => AddToCart(body),

    onMutate: async (
      variables: AddToCartType
    ): Promise<{ previousData?: CartListType }> => {
      await queryClient.cancelQueries({ queryKey: ["orderCart"] });
      const previousData = queryClient.getQueryData<CartListType>(["orderCart"]);

      queryClient.setQueryData(["orderCart"], (oldData:CartListType) => {
        if (!oldData || !oldData.items) {
          return {
            items: [
              {
                productId: variables.productId,
                quantity: 1,
              },
            ],
          } as CartListType;
        }

        const isAlreadyInCart = oldData.items.some(
          (item) => item.productId === variables.productId
        );

        if (isAlreadyInCart) {
          return oldData;
        } else {
          return {
            ...oldData,
            items: [
              ...oldData.items,
              {
                productId: variables.productId,
                quantity: 1,
              },
            ],
          };
        }
      });

      return { previousData };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orderCart"],
      });
    },

    onError: (_error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["orderCart"], context.previousData);
      }
    }
  });

  return mutation;
};
