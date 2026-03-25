import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import "../index.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setMainImage(data.thumbnail);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load product");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="product-detail-container">
      {/* Left Column: Product Image + Gallery */}
      <div className="product-images">
        <img src={mainImage} alt={product.title} className="main-image" />
        <div className="thumbnail-container">
          {product.images &&
            product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title}-${idx}`}
                className={`thumbnail ${
                  mainImage === img ? "active-thumbnail" : ""
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
        </div>
      </div>

      {/* Right Column: Product Info */}
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="category">{product.category}</p>
        <p className="price">₹{Math.round(product.price * 82)}</p>
        <p className="description">{product.description}</p>
        <p className="stock">
          {product.stock > 0
            ? `In Stock (${product.stock} available)`
            : "Out of Stock"}
        </p>
        <div className="buttons">
          <button
            onClick={() => dispatch(addItem(product))}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
          <Link to="/cart">
            <button>Go to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;