import { likeIcon, starIcon } from "../../icons/foodsPageIcons";
import { convertToFa } from "../../utils/functions";

function FoodCard({ foodData }) {
  const {
    categories,
    description,
    discount,
    id,
    ingredients,
    name,
    pictures,
    price,
    rating,
    status,
  } = foodData;

  return (
    <div className="mr-4 inline-flex h-[417px] w-72 flex-col items-center justify-center gap-4 rounded-lg border border-stone-300 bg-white px-4 pb-4">
      <img
        className="w-72 shrink grow basis-0 rounded-tl-lg rounded-tr-lg p-2.5"
        alt={name}
        src={pictures[0]}
      />
      <div className="inline-flex h-[22px] items-center justify-center">
        <div className="text-center  text-xl font-semibold capitalize leading-9 text-neutral-700">
          {name}
        </div>
      </div>
      <div className="inline-flex h-[51px] items-center justify-between self-stretch">
        <div className="inline-flex h-12 flex-col items-start justify-between">
          <div className="inline-flex items-center justify-start gap-2">
            {discount !== 0 && (
              <div className="flex items-center justify-center rounded-lg bg-red-50 pl-[7px] pr-[9px]">
                <div className="text-center  text-[10px] font-normal capitalize leading-[18px] text-red-700">
                  %{convertToFa(discount)}
                </div>
              </div>
            )}
            <div className="text-right  text-[10px] font-normal capitalize leading-[18px] text-zinc-400 line-through">
              <span>تومان</span>
              {convertToFa(price)}
            </div>
          </div>
          {discount !== 0 && (
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-right  text-base font-normal capitalize leading-7 text-neutral-700">
                {convertToFa(price - (price * discount) / 100)}
                <span>تومان</span>
              </div>
            </div>
          )}
        </div>
        <div className="inline-flex h-[49px] flex-col items-end justify-between">
          <div className="inline-flex items-center justify-start gap-1">
            <div className="text-right  text-[10px] font-normal capitalize leading-[18px] text-zinc-400">
              افزودن به علاقمندی‌ها
            </div>
            <div className="flex h-4 w-4 items-center justify-center">
              <div className="inline-flex h-4 w-4 items-center justify-center">
                <div className="relative h-4 w-4">{likeIcon}</div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-end gap-1 py-1">
            <div className="text-right  text-[10px] font-normal capitalize leading-[18px] text-zinc-400">
              ({rating.count}
              <span className="mx-1"> امتیاز </span>)
            </div>
            <div className="text-right  text-sm font-medium capitalize leading-normal text-neutral-700">
              {rating.stars}
            </div>
            <div className="relative h-4 w-4">{starIcon}</div>
          </div>
        </div>
      </div>
      <div className="inline-flex h-10 items-center justify-center self-stretch">
        <div className="flex h-10 shrink grow basis-0 items-center justify-center gap-2 rounded bg-[#417F56] px-4 py-2">
          <div className="text-center  text-base font-medium capitalize leading-7 text-white">
            افزودن به سبد خرید
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
