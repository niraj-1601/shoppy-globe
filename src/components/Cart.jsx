import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => navigate("/checkout");

  if (items.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      {items.map(item => <CartItem key={item.id} item={item} />)}
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;