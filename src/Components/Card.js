import React, { useState, useEffect } from "react";
import "./Card.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Card(props) {
  // State to track whether the product is wishlisted
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Check if the product is wishlisted when the component mounts
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isProductWishlisted = existingWishlist.some(
      (item) => item.id === props.id
    );
    setIsWishlisted(isProductWishlisted);
  }, [props.id]);

  // Function to toggle the wishlist status of the product
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);

    // Retrieve existing wishlist items from localStorage
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Add or remove the product from the wishlist
    const updatedWishlist = isWishlisted
      ? existingWishlist.filter((item) => item.id !== props.id)
      : [...existingWishlist, { id: props.id, title: props.title }];

    // Save the updated wishlist to localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="card">
      <div className="image-container">
        {/* Product Image */}
        <img width="350px" height="320px" src={props.img} alt={props.alt} />

        {/* Wishlist Button */}
        <FavoriteIcon
          onClick={toggleWishlist}
          color={isWishlisted ? "error" : "default"} // Change color to red when wishlisted
          className="heart-button"
        />
      </div>

      {/* Product Title */}
      <p className="cardTitle">{props.title}</p>

      {/* Product Price */}
      <p className="cardPrice">{props.price}</p>
    </div>
  );
}

export default Card;
