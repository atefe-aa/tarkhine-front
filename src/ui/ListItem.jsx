import { Link } from "react-router-dom"

function ListItem({className, children, link}) {
    return (
        <li className={className}>
        <Link to={link}>{children}</Link>
      </li>
    )
}

export default ListItem
