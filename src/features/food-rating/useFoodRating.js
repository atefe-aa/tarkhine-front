import { useMutation } from "@tanstack/react-query";
import { rateFood } from "../../services/apiFoodRating";
import toast from "react-hot-toast";

export function useFoodRating() {
  const {
    mutate: addRating,
    isPending,
    error,
    data,
  } = useMutation({
    mutationFn: rateFood,
    retry: false,
    onSuccess: () => {
      toast.success("امتیاز با موفقیت ثبت شد.");
    },
    onError: () => {
      toast.error("امتیاز ثبت نشد.");
    },
  });
  return {addRating, isPending, error, data}
}
