import { Link } from "react-router-dom";

function DropDownItem({ children, link }) {
  return (
    <Link
      to={link}
      className="inline-flex h-10 cursor-pointer items-center justify-center self-stretch bg-white pl-2 hover:bg-neutral-200 hover:shadow-sm"
    >
      <div className="flex h-[22px] shrink grow basis-0 items-center justify-end gap-1 px-2">
        <div className=" text-sm font-normal capitalize leading-[25.20px] text-neutral-700">
          {children}
        </div>
      </div>
    </Link>
  );
}

export default DropDownItem;
