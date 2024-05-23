import "../Styles/ProductItem.css";
import { Link } from "react-router-dom";
import ShareButton from "./ShareButton";

const ProductItem = (props) => {
  const { product } = props;
  const { images, price, vendor, title } = product;
  return (
    <li className="product-item-list">
      <Link to={`/product/${vendor}`} className="link-style">
        <div className="product-items">
          <img src={images[0].src} alt={vendor} className="product-item-img" />
          <p className="product-item-text">{vendor}</p>
          <p className="product-item-text">{title}</p>
          <p className="product-item-price">Rs.{price.value}</p>
        </div>
        <div className="shareBtn">
          <ShareButton product={product} />
        </div>
      </Link>
    </li>
  );
};
export default ProductItem;
