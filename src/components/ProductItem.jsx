import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <h3>{product.title}</h3>
      </Link>
     <p>₹{Math.round(product.price * 93.82)}</p>
      <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;