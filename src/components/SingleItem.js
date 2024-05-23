import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleItem = () => {
  const [products, setProducts] = useState([]);
  const [pageno, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

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

  return <div>productItem</div>;
};
export default SingleItem;
