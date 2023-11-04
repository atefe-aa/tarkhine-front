import { Link } from "react-router-dom";

function ListDropDownItem({ option, className }) {
  return (
    <li key={option.name} className={className}>
      <Link to={option.href} className="text-xs text-neutral-500">
        {option.name}
      </Link>
    </li>
  );
}

export default ListDropDownItem;
