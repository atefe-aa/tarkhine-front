import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFavorites as updateFavoritesApi } from "../../services/apiFavorites";
import toast from "react-hot-toast";

export function useUpdateFavorites() {
  const queryClient = useQueryClient();
  const {
    mutate: updateFavorites,
    isPending,
    error,
  } = useMutation({
    mutationFn: updateFavoritesApi,
    mutationKey: ["favorites"],
    onSuccess: () => {
      queryClient.invalidateQueries("favorites");
      toast.success("لیست علاقه مندی ها آپدیت شد.");
    },
    onError: (error) => {
      console.error(error);
      toast.error("خطایی رخ داده است.");
    },
  });

  return { updateFavorites, isPending, error };
}
