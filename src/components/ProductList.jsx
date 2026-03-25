import { useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const searchQuery = useSelector(state => state.cart.searchQuery);

  if (error) return <p>{error}</p>;

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;