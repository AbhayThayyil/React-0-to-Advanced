import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const [buttonState, setButtonState] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  const { loggedInUser } = data;

  return (
    <div className="header flex justify-between content-center bg-blue-100 shadow-md m-1">
      <div className="logoContainer">
        <img className="logoImage w-20" src={LOGO_URL} />
      </div>
      <div className="navItems items-center ">
        <ul className="navItemsList flex p-4 gap-2 items-center">
          <li className={onlineStatus ? "text-green-600" : "text-red-600"}>
            {onlineStatus ? "Online" : "Offline"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/cart"> Cart ({cartItems?.length})</Link>
          </li>
          <button
            className="loginButton bg-green-300 px-2 rounded-md"
            onClick={() => {
              buttonState === "Login"
                ? setButtonState("Logout")
                : setButtonState("Login");
            }}
          >
            {buttonState}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
