import { useEffect, useState } from "react";
import Banner from "../ui/Banner";
import Category from "../ui/Category";
import ReactLoading from "react-loading";
import Food from "../features/menu/Food";
import SearchProduct from "../features/search/SearchProducts";

// images
import notFoundImg from "../images/match-not-found.png";

// icons
import {
  shoppingCartDesktopIcon,
  shoppingCartIcon,
} from "../icons/foodsPageIcons";

// styles
import { Link } from "react-router-dom";
import { useBranchMenu } from "../features/menu/useBranchMenu";
import { useAllCategories } from "../features/categories/useAllCategories";
import { useMainCategories } from "../features/categories/useMainCategories";
import CartCounterIcon from "../features/cart/CartCounterIcon";

const tabGroupStyle =
  "container max-w-[1224px] mx-auto flex items-center justify-start px-5 text-[13px] gap-x-4 mb-2 md:text-base";
const tabGroupItemStyle =
  "font-semibold text-sm border-b border-[#417F56] py-[.6em] text-[#417F56] md:py-[1.188em] md:text-base md:border-b-2";
const cartButtonStyle =
  "absolute left-5 -top-1.5 flex items-center gap-x-1 text-[#417F56] py-1.5 px-2 text-sm border border-[#417F56] rounded-md md:gap-x-2 md:px-7 md:text-base md:rounded lg:py-[7px] lg:px-7 xl:py-2 xl:px-8";
export const mainContainerStyle =
  "mx-5 mb-6 grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-6 md:mb-11 ";
const categoryTitleStyle =
  "text-[#353535] font-bold text-lg md:col-span-2 md:text-xl xl:text-2xl";
export const notFoundResultsStyle =
  "min-h-[calc(100vh_-_590px)] sm:min-h-[calc(100vh_-_670px)] text-[#353535] flex flex-col justify-center items-center gap-y-4 text-sm my-14 sm:mt-20 md:text-xl md:gap-y-8";

export const categorizeProducts = (products) => {
  const categorized = {};
  products.forEach((product) => {
    product.categories.forEach((category) => {
      if (categorized[category]) {
        categorized[category].push(product);
      } else {
        categorized[category] = [product];
      }
    });
  });

  return categorized;
};

function Menu() {
  useEffect(() => {
    document.title = "منو";
  }, []);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { allCategories, isLoading: isLoadingCategories } = useAllCategories();
  const { categories: mainCategories, isLoading: isLoadingMainCategories } =
    useMainCategories();
  const { branchMenu, isLoading, error } = useBranchMenu();
  if (isLoading || isLoadingCategories || isLoadingMainCategories) return;
  const categorizedProducts = categorizeProducts(branchMenu);
  let foundResults = false;

  return (
    <>
      <Banner />

      {/* tab groups */}
      <div className="bg-[#EDEDED] text-[#717171]">
        <div className={tabGroupStyle}>
          {mainCategories.map((cat) => (
            <button className={cat.id === 1 ? tabGroupItemStyle : ""} key={cat.id}>
              {" "}
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto flex max-w-[1224px] flex-col md:mb-7 md:flex-row md:justify-between">
        {/* category box */}
        <Category
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* search box */}
        <div className="px-5">
          <SearchProduct
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>
      </div>

      {/* shopping cart button */}
      <div className="container relative mx-auto max-w-[1224px]">
        <Link to="/cart" className={cartButtonStyle}>
          <span className="md:hidden">{shoppingCartIcon}</span>
          <span className="hidden md:block">{shoppingCartDesktopIcon}</span>
          <CartCounterIcon />
          <span>تکمیل خرید</span>
        </Link>
      </div>

      {/* products */}
      {isLoading && isLoadingCategories && isLoadingMainCategories ? (
        <>
          <div className="mt-10 flex min-h-[calc(100vh_-_575px)] justify-center sm:mt-20 sm:min-h-[calc(100vh_-_615px)] md:hidden">
            <ReactLoading
              type="bubbles"
              color="#417F56"
              height={60}
              width={60}
            />
          </div>
          <div className="mt-32 hidden  min-h-[calc(100vh_-_60vh)] justify-center md:flex ">
            <ReactLoading
              type="bubbles"
              color="#417F56"
              height={75}
              width={75}
            />
          </div>
        </>
      ) : error ? (
        <h2 className="h-screen">{error}</h2>
      ) : (
        Object.keys(categorizedProducts).map((category) => {
          let catData;

          allCategories.forEach((cat) => {
            if (cat.id == category) {
              catData = cat;
              return;
            }
          });

          const filteredProducts = categorizedProducts[category].filter(
            (product) =>
              (selectedCategory === "all" ||
                product.categories[0] === selectedCategory) &&
              product.name.includes(searchText),
          );

          if (filteredProducts.length > 0 && catData) {
            foundResults = true;
            return (
              <div className="container mx-auto max-w-[1224px]" key={category}>
                <div key={category} className={mainContainerStyle}>
                  <h3 className={categoryTitleStyle}>{catData.name}</h3>
                  {filteredProducts.map((product) => (
                    <Food key={product.id} productData={product} />
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })
      )}
      {!foundResults &&
        !isLoading &&
        !isLoadingCategories &&
        !isLoadingMainCategories && (
          <div className={notFoundResultsStyle}>
            <h3>موردی با این مشخصات پیدا نکردیم!</h3>
            <img
              src={notFoundImg}
              alt="not found"
              className="w-[152px] md:w-[390px]"
            />
          </div>
        )}
    </>
  );
}

export default Menu;
