import { useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
    <p>₹{Math.round(item.price * 93.82)} x {item.quantity}</p>
      <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
      <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
      <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
    </div>
  );
};

export default CartItem;