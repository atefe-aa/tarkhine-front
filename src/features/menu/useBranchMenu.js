import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBranchMenu} from "../../services/apiMenu";

export function useBranchMenu() {
  const { branchId } = useParams();

  const {
    data: branchMenu,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["branchMenu", branchId],
    queryFn: () => getBranchMenu({branchId}),
    retry: false,
  });
  return { branchMenu, isLoading, error };
}
