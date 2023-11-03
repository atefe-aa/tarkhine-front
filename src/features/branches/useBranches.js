import { useQuery } from "@tanstack/react-query";
import { getBranches } from "../../services/apiBranches";

export function useBranches() {
  const { isLoading, data: branches, error } = useQuery({
    queryKey: ["branches"],
    queryFn:() => getBranches(),
    retry: false,
  });

  return { isLoading, error, branches };
}
