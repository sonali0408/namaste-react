import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <h1>Cart is empty!! Add items to the cart</h1>
  ) : (
    <div className="menu-container w-6/12 mx-auto m-4 p-4">
      <h1 className="text-2xl text-center font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={clearCartItems}
      >
        Clear Cart
      </button>
      <CategoryItemList data={cartItems}></CategoryItemList>
    </div>
  );
};

export default Cart;
