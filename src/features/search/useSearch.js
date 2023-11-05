import { useQuery } from "@tanstack/react-query";
import { search } from "../../services/apiFoods";

export function useSearch({ query }) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => search({ query }),
  });
  return { data, isLoading, error };
}
