import { useOutsideClick } from "../hooks/useOutsideClick";
import DropDownItem from "./DropDownItem";

function DropDown({ options, baseLink = "", position, onClick }) {
  const ref = useOutsideClick(onClick, true);
  return (
    <div
      ref={ref}
      onClick={onClick}
      className="inline-flex w-36 flex-col items-center justify-center shadow-lg rounded-lg "
      style={{
        position: "fixed",
        right: position.x,
        top: position.y,
      }}
    >
      {options.map((option) => (
        <DropDownItem key={option.id} link={`${baseLink}/${option.id}`}>
          {option.name}
        </DropDownItem>
      ))}
    </div>
  );
}

export default DropDown;
