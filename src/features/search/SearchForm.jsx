// icons
import { useEffect, useState } from "react";

import { searchIcon } from "../../icons/homePageIcons";
import { searchDesktopIcon } from "../../icons/foodsPageIcons";
import { useSearch } from "./useSearch";
import { useSearchParams } from "react-router-dom";

// Styles
const searchBoxStyle =
  "flex space-x-4 mx-4 text-center items-center justify-between px-4 h-9 border border-[#CBCBCB] rounded-md mb-[1.5em] lg:justify-center lg:w-[400px] xl:w-[490px] lg:h-10 lg:rounded-lg";
const inputSearchStyle =
  "bg-transparent w-full pl-2 outline-none text-[#353535] text-sm placeholder:text-xs placeholder:text-[#353535]";

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams?.get('query') || "";
  const [query, setQuery] = useState(searchQuery);
  const { isSearching, search } = useSearch();

  useEffect(
    function () {
      if (query?.length > 2) {
        search({ query });
      }
    },
    [query, search],
  );

  function handleSubmit(e) {
    e.preventDefault();
    searchParams.set('query', query);
    setSearchParams(searchParams);
  }

  return (
    <form onSubmit={handleSubmit} className={searchBoxStyle}>
      <input
        disabled={isSearching}
        type="text"
        name="search"
        placeholder="جستجو"
        className={inputSearchStyle}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button disabled={isSearching}>
        <span className="lg:hidden">{searchIcon}</span>
        <span className="hidden lg:block">{searchDesktopIcon}</span>
      </button>
    </form>
  );
}

export default SearchForm;
