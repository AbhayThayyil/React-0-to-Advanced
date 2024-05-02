import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenu = (props) => {
  const { restaurantData, showItems, setShowIndex } = props;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="bg-gray-200 w-8/12 m-1 p-2 shadow-md">
      <span className="font-bold text-xl cursor-pointer " onClick={handleClick}>
        {restaurantData?.title} ({restaurantData?.itemCards.length})
      </span>
      {showItems && (
        <div className="bg-gray-100 p-4">
          {restaurantData?.itemCards?.map((item) => (
            <ItemList key={item?.card?.info?.id} itemData={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
