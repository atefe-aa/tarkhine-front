import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emptyCart } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useEmptyCart() {
  const queryClient = useQueryClient();
  const {
    isPending,
    error,
    mutate: clearCart,
  } = useMutation({
    mutationFn: emptyCart,
    retry:false,
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
      toast.success("سبد خرید خالی شد.");
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  return { isPending, error, clearCart };
}
