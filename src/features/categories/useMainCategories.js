import { useQuery } from "@tanstack/react-query";
import { getMainCategories } from "../../services/apiCategories";

export function useMainCategories() {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["main-categories"],
    queryFn: () => getMainCategories(),
    retry: false,
  });
  return { isLoading, error, categories };
}
