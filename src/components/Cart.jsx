import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return cartItems.length === 0 ? (
    <h1>Cart is Empty !!</h1>
  ) : (
    <>
      <button
        className="bg-red-600 p-2 m-5 text-white "
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <div className="w-6/12 mx-auto my-2 p-2 border border-gray-400  rounded-lg">
        {cartItems.map((item) => (
          <div key={item?.card?.info?.id}>
            <ItemList itemData={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
