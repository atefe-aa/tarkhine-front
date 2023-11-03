import { Link } from "react-router-dom";
import { arrowDownIcon } from "../icons/homePageIcons";
import { useState } from "react";
import { useBranches } from "../features/branches/useBranches";
import ReactLoading from "react-loading";

function DropDown({ children, options, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, branches } = useBranches();

  if (isLoading) return;

  let proOptions;
  if (options === "branches") {
    proOptions = branches.map((branch) => ({
      name: branch.name,
      href: `/branch/${branch.id}`,
    }));
  }
  if (options === "menu") proOptions = branches;

  function handleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <li
      className={` ${className} ${isOpen ? "flex flex-col" : "block"}`}
      onClick={() => handleOpen()}
    >
      <div>
        {children}
        <span>{arrowDownIcon}</span>
      </div>
      {isOpen &&
        (isLoading ? (
          <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
        ) : (
          <ul>
            {proOptions.map((option) => (
              <li key={option.name} className="hover:text-base">
                <Link to={option.href}>{option.name}</Link>
              </li>
            ))}
          </ul>
        ))}
    </li>
  );
}

export default DropDown;
