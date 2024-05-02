import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../hooks/useRestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import { useState } from "react";

const RestaurantInfo = () => {
  const { restaurantId } = useParams();
  const restaurantData = useRestaurantInfo(restaurantId);

  const [showIndex, setShowIndex] = useState(null);

  const itemCategory =
    restaurantData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (restaurantData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantData?.cards[2]?.card?.card?.info;

  return (
    <div className="restaurantInfo flex flex-col gap-2 items-center justify-center py-3">
      <h1 className="font-sans font-bold text-2xl">{name}</h1>
      <h2 className="font-sans text-xl">{cuisines.join(", ")}</h2>
      <h3 className="font-sans text-xl">{costForTwoMessage}</h3>
      <h4 className="font-sans text-xl">{avgRating}</h4>
      {itemCategory.map((item, index) => (
        <RestaurantMenu
          key={item?.card?.card?.title}
          restaurantData={item?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantInfo;
