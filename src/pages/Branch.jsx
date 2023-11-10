import { useParams } from "react-router-dom";
import FoodsRow from "../features/menu/FoodsRow";
import { useMenuByCategory } from "../features/menu/useMenuByCategory";
import { usePopularMenu } from "../features/menu/usePopularMenu";
import { useRecommendedMenu } from "../features/menu/useRecommendedMenu";
import { documentNormalIcon } from "../icons/completionOfInformationIcon";
import Banner from "../ui/Banner";
import Button from "../ui/Button";
import ReactLoading from "react-loading";
import { useBranch } from "../features/branches/useBranch";
import { useEffect } from "react";

function Branch() {
  const { isLoading: popLoading, popularMenu } = usePopularMenu();
  const { isLoading: recLoading, recommendedMenu } = useRecommendedMenu();
  const { isLoading: catLoading, menuByCategory } = useMenuByCategory({
    categoryId: 1,
  });
  const { branchId } = useParams();
  const { branch } = useBranch();

  useEffect(() => {
    document.title = ` ترخینه | شعبه ${branch?.name}`;
  }, [branch?.name]);
  return (
    <div>
      <Banner />

      {recLoading ? (
        <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
      ) : (
        recommendedMenu.length > 0 && (
          <FoodsRow foodList={recommendedMenu} title="پیشنهاد ویژه" />
        )
      )}
      {popLoading ? (
        <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
      ) : (
        popularMenu.length > 0 && (
          <FoodsRow title="غذاهای محبوب" frame={recommendedMenu?.length > 0 } foodList={popularMenu} />
        )
      )}
      {catLoading ? (
        <ReactLoading type="bubbles" color="#417F56" height={60} width={60} />
      ) : (
        menuByCategory.length > 0 && (
          <FoodsRow title="غذاهای غیرایرانی"  foodList={menuByCategory} />
        )
      )}

      <Button link={`/menu/${branchId}`} className="font-bold">
        مشاهده منو کامل
        {documentNormalIcon}
      </Button>
    </div>
  );
}

export default Branch;
