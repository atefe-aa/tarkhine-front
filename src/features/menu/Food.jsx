import { Link } from "react-router-dom";

// functions
import { convertToFa } from "../../utils/functions";

// icons
import {
  starIcon,
  starEmptyIcon,
  starDesktopIcon,
  starEmptyDesktopIcon,
} from "../../icons/foodsPageIcons";
import RatingStars from "../food-rating/RatingStars";
import { useFoodRating } from "../food-rating/useFoodRating";
import Favorite from "../favorites/Favorite";

// styles
const foodBoxStyle =
  "flex items-center justify-between border border-[#CBCBCB] overflow-hidden rounded-md h-[6.25em] lg:h-[9.875em] lg:rounded-lg lg:relative";
const foodImgStyle = "w-[5.75em] h-[6.25em] lg:w-[10.563em] lg:h-[9.875em]";
const headerDivStyle =
  "flex items-center justify-between text-xs sm:mb-2 lg:mb-3";
const titleStyle =
  "text-[#353535] sm:text-[12.5px] font-medium lg:text-lg lg:font-bold lg:mt-1";
const priceDivStyle =
  "flex flex-col-reverse sm:flex-row items-center sm:gap-x-2 lg:relative lg:top-9";
const priceStyle = "text-[#ADADAD] line-through lg:text-[15px] ";
const offerStyle =
  "bg-[#FFF2F2] text-[#C30000] py-[2px] px-[6px] text-[9px] sm:text-xs rounded-[10px] font-medium lg:text-xs ";
const containerDivStyle =
  "flex items-center justify-end sm:justify-between text-xs font-medium text-[#353535] mb-1 lg:text-base lg:mb-8";
const descriptionStyle = "hidden sm:block text-[10.25px] lg:text-sm";
const discountedDivStyle =
  "flex items-center gap-x-2 font-medium lg:relative lg:top-6 ";
const footerDivStyle = "flex items-center justify-between";
const likeStyle =
  "mt-0.5 lg:absolute lg:left-4 lg:top-4 scale-[1.1] lg:scale-[1.5]";
const ratingDivStyle = "flex items-center gap-x-1";
const buttonStyle =
  "bg-[#417F56] text-white border border-[#417F56] rounded sm:rounded-md text-[10px] py-1.5 px-2 sm:p-[9px] font-medium lg:rounded lg:text-sm lg:px-5 xl:px-12 ";

export const rating = {
  count: 5,
  value: 4,
  emptyIcon: <span>{starEmptyIcon}</span>,
  filledIcon: <span>{starIcon}</span>,
};

export const ratingDesktop = {
  count: 5,
  value: 4,
  emptyIcon: <span>{starEmptyDesktopIcon}</span>,
  filledIcon: <span>{starDesktopIcon}</span>,
};

const Food = ({ productData }) => {
  const { name, price, discount, description, pictures, id, rating } =
    productData;
  const discountedPrice = price - (price * discount) / 100;
  const { isPending, addRating } = useFoodRating();
 

  const addToCart = () => {
    // if (isLoggedIn) {
    //   dispatch({ type: "ADD_ITEM", payload: productData });
    //   showToast("محصول به سبد خرید اضافه شد", "success");
    // } else {
    //   showToast("شما ابتدا باید وارد شوید", "error");
    // }
  };

  function onStarRating(rating) {
    addRating({ rating, food_id: id });
  }

  return (
    <div className={foodBoxStyle}>
      <Link to={`/menu`}>
        <img src={pictures[0]} alt={name} className={foodImgStyle} />
      </Link>
      <div className="flex-1 p-2 lg:px-3 lg:py-0">
        <div className={headerDivStyle}>
          <span className={titleStyle}>
            <Link to={`/menu`}>{name}</Link>
          </span>
          <div className={priceDivStyle}>
            <span className={priceStyle}>{convertToFa(price)}</span>
            <span className={offerStyle}>%{convertToFa(discount)}</span>
          </div>
        </div>

        <div className={containerDivStyle}>
          <span className={descriptionStyle}>
            <Link to={`/menu`}>{description.slice(0, 25)}...</Link>
          </span>
          <div className={discountedDivStyle}>
            <span>{convertToFa(discountedPrice)}</span>
            <span>تومان</span>
          </div>
        </div>

        <div className={footerDivStyle}>
          <div className={ratingDivStyle}>
            <Favorite
              className={`${likeStyle} !scale-[1.2] lg:!scale-[1.65]`}
              foodId={id}
            />

            <div
              className={`sm:block lg:hidden ${isPending ? " opacity-50" : ""}`}
            >
              <RatingStars
                onStarRating={onStarRating}
                defaultRating={rating.stars}
                size={20}
              />
            </div>
            <div
              className={`hidden lg:block ${isPending ? " opacity-50" : ""}`}
            >
              <RatingStars
                onStarRating={onStarRating}
                defaultRating={rating.stars}
                size={30}
              />
            </div>
          </div>

          <button className={buttonStyle} onClick={addToCart}>
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
