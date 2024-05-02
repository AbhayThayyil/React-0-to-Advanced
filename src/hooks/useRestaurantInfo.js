import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantInfo = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  const fetchRestaurantInfo = async () => {
    const response = await fetch(MENU_API + restaurantId);
    const data = await response.json();
    setRestaurantInfo(data?.data);
  };

  return restaurantInfo;
};

export default useRestaurantInfo
