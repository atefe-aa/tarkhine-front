import { Link } from "react-router-dom";

function DropDownItem({ children, link }) {
  return (
    <div className="inline-flex h-10 cursor-pointer items-center justify-center self-stretch bg-white pl-2 hover:bg-neutral-200 hover:shadow-sm">
      <div className="flex h-[22px] shrink grow basis-0 items-center justify-end gap-1 px-2">
        <Link
          to={link}
          className="font-['Estedad-VF'] text-sm font-normal capitalize leading-[25.20px] text-neutral-700"
        >
          {children}
        </Link>
      </div>
    </div>
  );
}

export default DropDownItem;
