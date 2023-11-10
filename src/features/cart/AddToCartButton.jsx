import ReactLoading from "react-loading";
import DeleteItem from "./DeleteItemQuantity";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useCart } from "./useCart";
import { convertToFa } from "../../utils/functions";
import { useUpdateCart } from "./useUpdateCart";

function AddToCartButton({ foodId, className }) {
  const { data, isLoading } = useCart();
  const { updateCart, isPending } = useUpdateCart();
  if (isLoading || isPending)
    return (
      <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
    );
  const isInCart = !isLoading && data && data.data && Object.prototype.hasOwnProperty.call(data.data, foodId);
  const currentCount = isInCart && data.data[foodId];
  return (
    <div>
      {isInCart ? (
        <div className="flex items-center gap-3 sm:gap-8">
          <UpdateItemQuantity foodId={foodId} currentCount={currentCount}>
            {convertToFa(currentCount)}
          </UpdateItemQuantity>
          <DeleteItem foodId={foodId} />
        </div>
      ) : (
        <button
          onClick={() => updateCart({ foodId, count: 1 })}
          className={className}
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
}

export default AddToCartButton;
