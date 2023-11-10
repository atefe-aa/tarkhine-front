import { useQuery } from "@tanstack/react-query";
import { getDetailedCart } from "../../services/apiCart";

export function useDetailedCart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["detailed-cart"],
    retry:false,
    queryFn: getDetailedCart,
  });

  return { isLoading, error, data };
}
