import { likeIcon, likeRedIcon } from "../../icons/foodsPageIcons";
import { useFavorites } from "./useFavorites";
import { useUpdateFavorites } from "./useUpdateFavorites";

function Favorite({ foodId, className="" }) {
  const { favorites, isLoading } = useFavorites();
  const { isPending: isPendingLike, updateFavorites } = useUpdateFavorites();

  function likeItem() {
    // if (isLoggedIn) {
    updateFavorites(foodId);
    // } else {
    //   toast.error("شما ابتدا باید وارد شوید");
    // }
  }
  return (
    <button className={className} onClick={likeItem}>
      {(!isLoading || !isPendingLike) && favorites?.data?.includes(foodId)
        ? likeRedIcon
        : likeIcon}
    </button>
  );
}

export default Favorite;
