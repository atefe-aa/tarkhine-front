import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPopularMenu } from "../../services/apiMenu";

export function usePopularMenu() {
  const { branchId } = useParams();

  const {
    data: popularMenu,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popularMenu", branchId],
    queryFn: () => getPopularMenu(branchId),
    retry: false,
  });
  return { popularMenu, isLoading, error };
}
