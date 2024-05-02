import { useContext, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../hooks/useRestaurantList";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const { restaurantList, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantList();

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (!onlineStatus) {
    return (
      <>
        <div className="flex justify-center items-center">
          <h1 className="font-sans text-3xl">
            Looks like you are offline.Please check your internet connection !!
          </h1>
        </div>
      </>
    );
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center items-center m-4 border-solid w-500">
        <label className="px-2">Username : </label>
        <input
          type="text"
          className="w-[300px] border border-solid border-black p-2 "
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="searchContainer flex justify-center m-4 border-solid w-500 ">
        <input
          className="search w-[400px] border border-solid border-black px-2 "
          data-testid="searchInput"
          placeholder="Search Restaurant..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            const searchedRestaurants = restaurantList.filter((restaurant) =>
              restaurant?.info?.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            );
            setFilteredRestaurants(searchedRestaurants);
          }}
        />
      </div>
      <div className="bodyContainer flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurantData) => (
          <Link
            key={restaurantData?.info?.id}
            to={`/restaurants/${restaurantData?.info?.id}`}
          >
            {restaurantData?.info?.promoted ? (
              <RestaurantCardPromoted restaurantData={restaurantData?.info} />
            ) : (
              <RestaurantCard restaurantData={restaurantData?.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
