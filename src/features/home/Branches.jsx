import ReactLoading from "react-loading";

import { useBranches } from "../branches/useBranches";
import BranchItem from "./BranchItem";

// styles
const containerStyle =
  "container max-w-[1224px] mx-auto px-5 mt-6 md:mt-10 text-center mb-12 xl:mt-12";
const h3Style =
  "font-bold text-lg mb-3  text-center text-[#353535] md:text-xl md:mb-6 lg:text-2xl";
const Branches = () => {
  const { isLoading, branches } = useBranches();
  return (
    <div className={containerStyle}>
      <h3 className={h3Style}>ترخینه گردی</h3>

      <div className="md:flex md:gap-x-4 lg:gap-x-5 xl:gap-x-6">
        {isLoading ? (
          <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
        ) : (
          branches.map((branch) => (
            <BranchItem branch={branch} key={branch.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Branches;
