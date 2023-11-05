import { Link } from "react-router-dom";
import HomePageMenuItem from "./HomePageMenuItem";

function CategoryItem({ category }) {
  return (
    <Link to={`/category/${category.id}`} className="w-1/2 p-2 md:w-[25%]">
      <HomePageMenuItem image={category.picture} title={category.name} />
    </Link>
  );
}

export default CategoryItem;
