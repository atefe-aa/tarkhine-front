import { useMutation, useQueryClient } from "@tanstack/react-query";
import { search as searchApi } from "../../services/apiFoods";
import toast from "react-hot-toast";

export function useSearch() {
  const queryClient = useQueryClient();

  const {
    isLoading: isSearching,
    mutate: search,
    data: searchResults,
  } = useMutation({
    mutationFn: searchApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["searchResults"], data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
    retry: false,
  });
  return { isSearching, search, searchResults };
}
