import ReactLoading from "react-loading";

// styles
import { useMainCategories } from "../categories/useMainCategories";
import CategoryItem from "./CategoryItem";
import SearchForm from "../search/SearchForm";

function HomePageMenu() {
  const { isLoading, categories } = useMainCategories();

  return (
    <div className="container mx-auto mt-4 max-w-[1224px] text-center ">
      <div className="px-5 md:hidden">
        <SearchForm  />
      </div>

      <h3 className="mb-3 text-center font-bold text-[#353535] md:mb-5 md:mt-12 md:text-xl lg:mb-8 lg:text-2xl">
        منوی رستوران
      </h3>

      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex flex-wrap justify-center">
          {isLoading ? (
            <ReactLoading
              type="bubbles"
              color="#417F56"
              height={60}
              width={60}
            />
          ) : (
            categories.map((category) => (
              <CategoryItem category={category} key={category.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePageMenu;
