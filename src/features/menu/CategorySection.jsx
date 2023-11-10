import { mainContainerStyle } from "../../pages/Menu";
import Food from "./Food";

const categoryTitleStyle =
  "text-[#353535] font-bold text-lg md:col-span-2 md:text-xl xl:text-2xl";

function CategorySection({ products, catName }) {

  return (
    <div className="container mx-auto max-w-[1224px]">
      <div className={mainContainerStyle}>
        <h3 className={categoryTitleStyle}>{catName}</h3>
        {products.map((product) => (
          <Food key={`${product.name}${product.id}`} productData={product} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
