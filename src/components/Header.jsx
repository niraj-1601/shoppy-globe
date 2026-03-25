import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/cartSlice";
import { useState } from "react";
import "../index.css";

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header className="header">
      {/* Logo / Brand */}
      <div className="brand">
        <Link to="/" className="brand-link">
          <h1>ShoppyGlobe</h1>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </header>
  );
};

export default Header;