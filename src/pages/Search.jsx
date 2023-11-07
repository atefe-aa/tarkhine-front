import FoodCard from "../features/menu/FoodCard";
import SearchForm from "../features/search/SearchForm";
import { useSearchResults } from "../features/search/useSearchResults";
import SearchNotFound from "../ui/SearchNotFound";
import ReactLoading from "react-loading";

function Search() {
  const { isLoading, searchResults } = useSearchResults();

  return (
    <div>
      <h3 className=" mb-3 text-center font-bold text-[#353535] md:mb-5 md:mt-12 md:text-xl lg:mb-8 lg:text-2xl">
        {isLoading ? (
          "درحال جست و جو"
        ) : searchResults && searchResults.length > 0 ? (
          <>
            {" "}
            <span>:</span>
            نتایج جست و جو
          </>
        ) : (
          <>
            {" "}
            <span>!</span>
            نتیجه ای یافت نشد
          </>
        )}
      </h3>
      <div className="flex justify-center">
        <SearchForm />
      </div>
      <div className="flex justify-center mb-10">
        {isLoading ? (
          <ReactLoading
            type="bubbles"
            color="#417F56"
            height={100}
            width={100}
          />
        ) : searchResults && searchResults.length > 0 ? (
          searchResults?.map((food) => (
            <FoodCard key={food.id} foodData={food} />
          ))
        ) : (
          <SearchNotFound />
        )}
      </div>
    </div>
  );
}

export default Search;
