import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../services/apiCategories";

export function useAllCategories() {
  const {
    isLoading,
    data: allCategories,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
    retry: false,
  });
  return { isLoading, error, allCategories };
}
