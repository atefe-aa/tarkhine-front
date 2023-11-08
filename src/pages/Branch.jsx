import FoodsRow from "../features/menu/FoodsRow";
import { useMenuByCategory } from "../features/menu/useMenuByCategory";
import { usePopularMenu } from "../features/menu/usePopularMenu";
import { useRecommendedMenu } from "../features/menu/useRecommendedMenu";
import { documentNormalIcon } from "../icons/completionOfInformationIcon";
import Banner from "../ui/Banner";
import Button from "../ui/Button";
import ReactLoading from "react-loading";

function Branch() {
  const { isLoading: popLoading, popularMenu } = usePopularMenu();
  const { isLoading: recLoading, recommendedMenu } = useRecommendedMenu();
  const { isLoading: catLoading, menuByCategory } = useMenuByCategory({
    categoryId: 1,
  });
  return (
    <div>
      <Banner />

      {recLoading ? (
        <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
      ) : (
        <FoodsRow foodList={recommendedMenu} title="پیشنهاد ویژه" />
      )}
      {popLoading ? (
        <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
      ) : (
        <FoodsRow title="غذاهای محبوب" frame={true} foodList={popularMenu} />
      )}
      {catLoading ? (
        <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
      ) : (
        <FoodsRow title="غذاهای غیرایرانی" foodList={menuByCategory} />
      )}

      <Button className="font-bold">
        مشاهده منو کامل
        {documentNormalIcon}
      </Button>
    </div>
  );
}

export default Branch;
