import React from "react";
import { CLOUDINARY_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ItemList = ({ itemData }) => {
  const { info } = itemData?.card;

  const dispatch = useDispatch();

  return (
    <div data-testid="foodItems" className="flex justify-between border-b border-gray-300 border-solid my-2 py-2">
      <div>
        <h1 className="font-bold">{info?.name}</h1>
        <p>{info?.description}</p>
      </div>
      <div className="relative">
        <img src={CLOUDINARY_URL + info?.imageId} className="w-[90px] p-2 " />
        <div className="absolute inset-x-6 bottom-0">
          <button
            className="bg-green-500 px-2  cursor-pointer rounded-md"
            onClick={() => dispatch(addToCart(itemData))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
