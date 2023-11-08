import DropDownItem from "./DropDownItem";

function DropDown({ options, baseLink = "", position, onClick }) {
  return (
    <div
    onClick={onClick}
      className="inline-flex h-40 w-36 flex-col items-center justify-center shadow"
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
