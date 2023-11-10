import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRecommendedMenu } from "../../services/apiMenu";

export function useRecommendedMenu() {
  const { branchId } = useParams();

  const {
    data: recommendedMenu,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recommendedMenu", branchId],
    queryFn: () => getRecommendedMenu(branchId),
    retry: false,
  });
  return { recommendedMenu, isLoading, error };
}
