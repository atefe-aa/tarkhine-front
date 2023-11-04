import HomePageMenuItem from "./HomePageMenuItem";

// icons
import { searchIcon } from "../../icons/homePageIcons";

// images
import Maincourse from "../../images/main-course.png";
import Appetizer from "../../images/appetizer.png";
import Dessert from "../../images/dessert.png";
import Drink from "../../images/drink.png";
import { Link } from "react-router-dom";

// styles
import { searchBoxStyle, inputSearchStyle } from "../../ui/SearchProduct";

const HomePageMenu = () => {
  return (
    <div className="container mx-auto mt-4 max-w-[1224px] text-center ">
      <div className="px-5 md:hidden">
        <div className={searchBoxStyle}>
          <input type="text" placeholder="جستجو" className={inputSearchStyle} />
          <span>{searchIcon}</span>
        </div>
      </div>

      <h3 className="mb-3 text-center font-bold text-[#353535] md:mb-5 md:mt-12 md:text-xl lg:mb-8 lg:text-2xl">
        منوی رستوران
      </h3>

      <div className="flex flex-col justify-center gap-y-10 md:flex-row">
        <div className="flex items-center justify-center">
          <Link to="/menu">
            <HomePageMenuItem image={Maincourse} title={"غذای اصلی"} />
          </Link>
          <Link to="/menu">
            <HomePageMenuItem image={Appetizer} title={"پیش غذا"} />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link to="/menu">
            <HomePageMenuItem image={Dessert} title={"دسر"} />
          </Link>
          <Link to="/menu">
            <HomePageMenuItem image={Drink} title={"نوشیدنی"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageMenu;
