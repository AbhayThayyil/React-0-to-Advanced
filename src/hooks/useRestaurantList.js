import { useEffect, useState } from "react";
import { SWIGGY_DATA_API } from "../utils/constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_DATA_API);
      const data = await response.json();
      setRestaurantList(
        data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(err.message);
    }
  };
  return { restaurantList, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurantList;
