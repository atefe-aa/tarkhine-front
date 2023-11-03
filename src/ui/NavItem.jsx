import { Link } from "react-router-dom";

function NavItem({ children, className, link, onClick = null }) {
  return (
    <li className={className} onClick={onClick}>
      <Link to={link}>{children}</Link>
    </li>
  );
}

export default NavItem;
