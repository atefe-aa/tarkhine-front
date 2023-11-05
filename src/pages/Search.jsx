import SearchNotFound from "../ui/SearchNotFound";
import SearchProduct from "../ui/SearchProduct";

function Search() {
  return (
    <div>
      <h3 className=" mb-3 text-center font-bold text-[#353535] md:mb-5 md:mt-12 md:text-xl lg:mb-8 lg:text-2xl">
        <span>:</span>
        جست و جو در منو رستوران
      </h3>
      <SearchProduct />
      <SearchNotFound />
    </div>
  );
}

export default Search;
