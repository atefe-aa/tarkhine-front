import { Link } from "react-router-dom";
import { logo, logoDesktop } from "../icons/headerIcons";

function Logo() {
  return (
    <Link to="/">
      <span className=" md:hidden">{logo}</span>
      <span className="hidden md:block md:scale-[.8] lg:scale-100">
        {logoDesktop}
      </span>
    </Link>
  );
}

export default Logo;
