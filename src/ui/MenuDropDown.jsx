import { arrowDownIcon } from "../icons/homePageIcons";
import { useState } from "react";
import { useBranches } from "../features/branches/useBranches";
import ReactLoading from "react-loading";
import { useMainCategories } from "../features/categories/useMainCategories";
import DropDown from "./DropDown";
import ListDropDownItem from "./ListDropDownItem";

function MenuDropDown({ children, options, className, type = "menu" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const { isLoading, branches } = useBranches();
  const { isLoading: isLoadingCategories, categories } = useMainCategories();

  if (isLoading || isLoadingCategories) return;

  let proOptions;
  if (options === "branches") {
    proOptions = branches.map((branch) => ({
      id: branch.id,
      name: branch.name,
      href: `/branch/${branch.id}`,
    }));
  }
  if (options === "categories") {
    proOptions = categories.map((category) => ({
      id: category.id,
      name: category.name,
      href: `/categories/${category.id}`,
    }));
  }

  function handleClick(e) {
    const liElement = e.target.closest("li");
    if (liElement) {
      // If a li element is found
      setIsOpen((open) => !open);
      const rect = liElement.getBoundingClientRect();
      setPosition({
        x: window.innerWidth - rect.width - rect.x,
        y: rect.y + rect.height + 8,
      });
    }
  }

  return (
    <>
      <li className={`${className} cursor-pointer items-center flex`} onClick={handleClick}>
        <span className="inline-flex mr-2">{arrowDownIcon}</span>
        {children}
      </li>
      {isOpen &&
        (isLoading || isLoadingCategories ? (
          <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
        ) : type === "menu" ? (
          proOptions.map((option) => (
            <ListDropDownItem
              key={option.name}
              option={option}
              className={className}
            />
          ))
        ) : (
          <DropDown
            position={position}
            options={proOptions}
            baseLink={options}
          />
        ))}
    </>
  );
}

export default MenuDropDown;
