import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const { avgRating, cloudinaryImageId, cuisines, name, costForTwo } =
  //   props?.restaurantData;
  const { restaurantData } = props;

  return (
    <div data-testid="resCard" className="restaurantCard flex flex-col bg-gray-300 w-[250px] m-3 h-[325px] p-2 rounded-lg hover:bg-gray-400">
      <img
        className="cardImage w-100 h-[140px] "
        src={CLOUDINARY_URL + "" + restaurantData?.cloudinaryImageId}
      />
      <h3 className="text-xl font-semibold py-2">{restaurantData?.name}</h3>
      <h3>{restaurantData?.cuisines?.join(", ")}</h3>
      <h3>{restaurantData?.avgRating}</h3>
      <h3>{restaurantData?.costForTwo}</h3>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // console.log(props.restaurantData,"with promoted props");
    return (
      <>
        <label className="absolute bg-black text-white p-2 m-1 rounded-md opacity-80">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
