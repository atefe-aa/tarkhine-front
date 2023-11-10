import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMenuByCategory} from "../../services/apiMenu";

export function useMenuByCategory({categoryId}) {
  const { branchId } = useParams();

  const {
    data: menuByCategory,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["menuByCategory", branchId, categoryId],
    queryFn: () => getMenuByCategory({branchId, categoryId}),
    retry: false,
  });
  return { menuByCategory, isLoading, error };
}
