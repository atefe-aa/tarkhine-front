import { convertToFa } from "../../utils/functions";
import { useCart } from "./useCart";

const itemsCounterStyle =
  "absolute -top-1 -right-1.5 text-[10px] text-white bg-[#61AE7B] rounded-full px-1  md:right-0.5 md:top-0.5 font-medium";

function CartCounterIcon() {
  const { data, isLoading } = useCart();
  if (isLoading) return;
  const count =
    !isLoading && data && data.data
      ? Object.values(data.data).reduce((acc, item) => acc + item, 0)
      : 0;
  if (count === 0) return null;
  return <span className={itemsCounterStyle}>{convertToFa(count)}</span>;
}

export default CartCounterIcon;
