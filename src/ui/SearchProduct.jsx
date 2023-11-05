// Icons
import { searchIcon } from "../icons/homePageIcons";
import { searchDesktopIcon } from "../icons/foodsPageIcons";
// Styles
export const searchBoxStyle =
  "flex space-x-4 mx-4 text-center items-center justify-between px-4 h-9 border border-[#CBCBCB] rounded-md mb-[1.5em] lg:justify-center lg:w-[400px] xl:w-[490px] lg:h-10 lg:rounded-lg";
export const inputSearchStyle =
  "bg-transparent w-full pl-2 outline-none text-[#353535] text-sm placeholder:text-xs placeholder:text-[#353535]";

const SearchProduct = ({ searchText, setSearchText }) => {
  return (
    <div className="flex justify-center">
      <div className={searchBoxStyle}>
        <input
          type="text"
          placeholder="جستجو"
          className={inputSearchStyle}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span className="lg:hidden">{searchIcon}</span>
        <span className="hidden lg:block">{searchDesktopIcon}</span>
      </div>
    </div>
  );
};

export default SearchProduct;
