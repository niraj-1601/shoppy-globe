import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePlaceOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={e => { e.preventDefault(); handlePlaceOrder(); }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <h3>Order Summary</h3>
        {items.map(item => <p key={item.id}>{item.title} -₹{Math.round(item.price * 93.82)} x {item.quantity}</p>)}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;