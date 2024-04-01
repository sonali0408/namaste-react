import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const { loggedInUser } = data;
  //console.log(loggedInUser);

  // Subscribing to the store using selector using useSelector hook
  const cartItems = useSelector((store) => store.cart.items.length);

  return (
    <header className="app-header flex justify-between bg-orange-300 top-0 sticky mb-10 items-center py-2.5 px-12">
      <div className="logo-container">
        <img src={LOGO_URL} className="app-logo w-16" alt="logo" />
      </div>
      <ul className="nav-items flex justify-between items-center">
        <li className="mx-2.5">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        <li className="mx-2.5">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-2.5">
          <Link to="/demo">Hook Demo</Link>
        </li>
        <li classNamehffgh="mx-2.5">
          <Link to="/help">Help</Link>
        </li>
        <li className="mx-2.5">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-2.5">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="mx-2.5">
          <Link to="/cart">
            {cartItems}
            <FontAwesomeIcon icon={faCartShopping} className="pl-1" />
          </Link>
        </li>
        <Link to="/login">
        <button
          className="login px-5 py-1 bg-white ml-2.5 rounded"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        </Link>
        <Link to="/signup">
        <button
          className="login px-5 py-1 bg-white ml-2.5 rounded"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
