import { useQuery } from "@tanstack/react-query";
import { getBranch } from "../../services/apiBranches";
import { useParams } from "react-router-dom";

export function useBranch() {
  const { branchId } = useParams();
  const {
    isLoading,
    data: branch,
    error,
  } = useQuery({
    queryKey: ["branch", branchId],
    queryFn: () => getBranch(branchId),
    retry: false,
  });

  return { isLoading, error, branch };
}
