import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../services/apiFavorites";

export function useFavorites() {
  const { data:favorites, isLoading, error } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
    retry: false,
  });

  return { favorites, isLoading, error };
}
