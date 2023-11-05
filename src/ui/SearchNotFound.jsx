function SearchNotFound() {
  return (
   <div className="flex justify-center mb-10">
     <div className="inline-flex h-[280px] w-[280px] items-center justify-center py-[0.02px]">
      <div className="relative h-[280px] w-[280px]">
        <div className=" absolute  left-[16px] top-[20px]  h-[250px] w-[250px] rounded-full bg-blue-100 "></div>
        <div className=" absolute left-0 top-[118.23px] w-[63px]">
          <img src="search/paper.svg" />
        </div>
        <div className=" absolute left-[100px] top-[72.90px] w-[80px]">
          <img src="search/paper.svg" />
        </div>
        <div className="absolute left-[85px] top-[85px] h-[154.19px] w-[113.83px]">
          <img src="search/search.svg" />
        </div>
        <div className=" absolute left-[220px] top-[118.23px] w-[63px]">
          <img src="search/paper.svg" />
        </div>
      </div>
    </div>
   </div>
  );
}

export default SearchNotFound;
