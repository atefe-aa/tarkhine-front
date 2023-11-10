import ReactLoading from "react-loading";
import { useUpdateCart } from "./useUpdateCart";

function UpdateItemQuantity({ foodId, children, currentCount }) {
  const { updateCart, isPending } = useUpdateCart();

  return (
    <div className="flex items-center justify-center gap-1 md:gap-3">
      <button
        disabled={isPending}
        className="h-4 w-4 text-xs md:h-6 md:w-6 md:text-base rounded-full bg-slate-100 text-center"
        onClick={() => updateCart({ foodId, count: currentCount - 1 })}
      >
        {isPending ? (
          <ReactLoading type="bubbles" color="#417F56" height={20} width={20} />
        ) : (
          "-"
        )}
      </button>
      <span className="text-xs md:text-sm font-medium">{children}</span>
      <button
        disabled={isPending}
        className="h-4 w-4 text-xs md:h-6 md:w-6 md:text-base rounded-full bg-slate-100 text-center"
        onClick={() => updateCart({ foodId, count: currentCount + 1 })}
      >
        {isPending ? (
          <ReactLoading type="bubbles" color="#417F56" height={20} width={20} />
        ) : (
          "+"
        )}
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
