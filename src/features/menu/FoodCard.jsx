import { starIcon } from "../../icons/foodsPageIcons";
import { convertToFa } from "../../utils/functions";
import AddToCartButton from "../cart/AddToCartButton";
import Favorite from "../favorites/Favorite";

function FoodCard({ foodData }) {
  const { discount, name, pictures, price, rating, status, id } = foodData;

  return (
    <div
      className={`inline-flex h-[250px] w-40 shrink-0 flex-col items-center justify-center gap-4 rounded-lg border border-stone-300 bg-white px-2 pb-4 md:h-[417px] md:w-72 md:px-4 ${
        status !== "available" && "opacity-50"
      }`}
    >
      <img
        className="h-auto max-h-[100%] w-auto max-w-[100%] shrink grow basis-0 rounded-tl-lg rounded-tr-lg "
        alt={name}
        src={pictures[0]}
      />
      <div className="inline-flex h-0  items-center justify-center">
        <div className="text-center text-sm font-semibold capitalize leading-9 text-neutral-700 md:text-xl">
          {name}
        </div>
      </div>
      <div className="inline-flex h-[51px] items-center justify-between self-stretch">
        <div className="inline-flex h-8 flex-col items-start justify-between md:h-12">
          <div className="inline-flex items-center justify-start gap-2">
            {discount !== 0 && (
              <div className="flex items-center justify-center rounded-lg bg-red-50 pl-[7px] pr-[9px]">
                <div className="text-center text-[7px] font-normal capitalize leading-[18px] text-red-700 md:text-[10px]">
                  %{convertToFa(discount)}
                </div>
              </div>
            )}
            <div className="text-right   text-[7px] font-normal capitalize leading-[18px] text-zinc-400 line-through md:text-[10px]">
              <span>تومان</span>
              {convertToFa(price)}
            </div>
          </div>
          {discount !== 0 && (
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-right   text-[10px] font-normal capitalize leading-7 text-neutral-700 md:text-base">
                {convertToFa(price - (price * discount) / 100)}
                <span>تومان</span>
              </div>
            </div>
          )}
        </div>
        <div className="inline-flex h-[30px] flex-col items-end justify-between md:h-[49px]">
          <div className="inline-flex items-center justify-start gap-1">
            <div className="hidden text-right text-[10px] font-normal capitalize leading-[18px] text-zinc-400 md:block">
              افزودن به علاقمندی‌ها
            </div>
            <div className="flex h-4 w-4 items-center justify-center">
              <div className="inline-flex h-4 w-4 items-center justify-center">
                <div className="relative h-4 w-4">
                  <Favorite foodId={id} />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-end gap-1 py-1">
            <div className="hidden  text-right text-[10px]  font-normal capitalize leading-[18px] text-zinc-400 md:block">
              ({rating.count}
              <span className="mx-1 "> امتیاز </span>)
            </div>
            <div className="text-right text-xs font-medium capitalize leading-normal text-neutral-700 md:text-sm">
              {rating.stars}
            </div>
            <div className="relative h-4 w-4">{starIcon}</div>
          </div>
        </div>
      </div>
      <div className="inline-flex h-7 items-center justify-center self-stretch md:h-10">
        <div className="flex h-7 shrink grow basis-0 items-center justify-center gap-2 rounded bg-[#417F56] py-2 md:h-10 md:px-4">
          <div className="leading-0 text-center text-xs capitalize text-white md:text-base md:font-medium md:leading-7">
<AddToCartButton foodId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
