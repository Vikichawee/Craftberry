import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./End.css";

function End({ choices }) {
  const [products, setProducts] = useState([]);
  const [matchingProducts, setMatchingProducts] = useState([]);

  // Fetch products data from the API when the component mounts
  useEffect(() => {
    fetch("https://jeval.com.au/collections/hair-care/products.json?page=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Calculate and store matching products based on user choices
  useEffect(() => {
    const storedMatchingProducts = JSON.parse(
      localStorage.getItem("matchingProducts")
    );

    if (storedMatchingProducts && storedMatchingProducts.length > 0) {
      // If matching products are found in local storage, use them
      setMatchingProducts(storedMatchingProducts);
    } else {
      // Calculate matching products based on user choices
      const choiceVar = [
        choices.q1,
        choices.q2,
        choices.q3,
        choices.q4,
        choices.q5,
      ];

      const newMatchingProducts = products.filter((product) => {
        const productInfo = `${product.tags} ${product.title} ${product.body_html}`;
        return choiceVar.some((choice) =>
          productInfo.toLowerCase().includes(choice.toLowerCase())
        );
      });

      // Store matching products in local storage
      setMatchingProducts(newMatchingProducts);
      localStorage.setItem(
        "matchingProducts",
        JSON.stringify(newMatchingProducts)
      );
    }
  }, [choices, products]);

  // Handle retake quiz button click
  const handleRetakeQuiz = () => {
    localStorage.removeItem("matchingProducts");
    localStorage.removeItem("wishlist");
    setMatchingProducts([]);
  };

  // Retrieve wishlist items from local storage or initialize an empty array
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Filter matching products into wishlisted and non-wishlisted
  const wishlistedMatchingProducts = matchingProducts.filter((product) =>
    wishlistItems.some((item) => item.id === product.id)
  );

  const nonWishlistedMatchingProducts = matchingProducts.filter(
    (product) => !wishlistItems.some((item) => item.id === product.id)
  );

  // Combine wishlisted and non-wishlisted matching products
  const sortedMatchingProducts = [
    ...wishlistedMatchingProducts,
    ...nonWishlistedMatchingProducts,
  ];

  // Map matching products to Card components
  const allCards = sortedMatchingProducts.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      price={product.variants[0].price}
      title={product.title}
      alt={product.title}
      img={product.images[0].src}
    />
  ));

  return (
    <div className="endContainer">
      <div className="endHeader">
        <h1 className="endTitle">Build your everyday self-care routine</h1>
        <p>
          Perfect for if you're looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances, you can add a moment of calm to the end
          of your day.
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button onClick={handleRetakeQuiz}>Retake quiz</button>
        </Link>
      </div>

      <div className="carousel-container">
        <AliceCarousel
          className="recommendedGrid"
          items={2}
          responsive={{
            0: { items: 2 },
          }}
        >
          {allCards}
        </AliceCarousel>
      </div>
    </div>
  );
}

export default End;
