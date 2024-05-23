import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import "../Styles/ProductList.css";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pageno, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const payload = {
        input: {
          page: pageno,
          pageSize: 10,
          filters: [],
          id: "#HomeHunts",
          entity: "vibe",
        },
      };
      // https://web.furrl.in/productDetail?id=635fe5fd4346383dbdea32ff&ref=vibeResults_HomeHunts
      // https://web.furrl.in/productDetail?productId=7226412957869&id=63a4470d24965a9fb6731e42&brand=Beeglee&name=BlackSkirtPipingSet&_rsc=jkvcm

      const response = await fetch(
        `https://api.furrl.in/api/v2/listing/getListingProducts`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      setLoading(true);
      if (response.ok) {
        const data = await response.json();
        const expand = data.data.getListingProducts;
        setProducts((prevProducts) => [...prevProducts, ...expand.products]);
        setLoading(false);
      } else {
        console.error("Error:", response.statusText);
      }
    };

    fetchProducts();
  }, [pageno]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="product-list">
      <div className="bg-pic">
        <h1>#HomeHunts</h1>
      </div>
      <h1 className="Productitle">Products</h1>
      {loading && (
        <div className="loader">
          <ClipLoader color="#123abc" loading={true} size={50} />
        </div>
      )}
      <ul className="productItemContainer">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
