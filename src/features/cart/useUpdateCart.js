import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart as updateCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useUpdateCart() {
  const queryClient = useQueryClient();

  const {
    mutate: updateCart,
    isPending,
    error,
  } = useMutation({
    mutationFn: updateCartApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, updateCart, error };
}
