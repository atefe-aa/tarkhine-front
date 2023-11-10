import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { data, isLoading, error };
}
