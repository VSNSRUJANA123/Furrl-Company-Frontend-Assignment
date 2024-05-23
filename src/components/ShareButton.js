import "../Styles/ShareButton.css";
import { IoShareOutline } from "react-icons/io5";
const ShareButton = ({ product }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out this product: ${product.name}`,
          url: product.url,
        });
        console.log("Product shared successfully");
      } catch (error) {
        console.error("Error sharing product:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <button className="share-button" onClick={handleShare}>
      <span>
        <IoShareOutline />
      </span>
    </button>
  );
};

export default ShareButton;
