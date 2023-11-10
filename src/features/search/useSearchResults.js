import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { search } from "../../services/apiFoods";

export function useSearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams?.get("query");

  const {
    data: searchResults,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["searchResults"],
    queryFn: () => search({ query }),
    retry: false,
  });

  return { searchResults, isLoading, error };
}
