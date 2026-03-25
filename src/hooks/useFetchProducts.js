import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products))
      .catch(err => setError(err.message));
  }, []);

  return { products, error };
};

export default useFetchProducts;