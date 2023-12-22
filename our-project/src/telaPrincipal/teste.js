import React, { useState } from "react";
import Slider from "react-slick";
import "./teste.css";

const Carousel = () => {
  // Define the initial state variables
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  // Define the settings for the carousel component
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    beforeChange: (current, next) => {
      // Update the slide index and direction before the transition
      setSlideIndex(next);
      setDirection(current < next ? "next" : "prev");
    },
    nextArrow: (
      // Define a custom next arrow component
      <button
        type="button"
        className="slick-next"
        onClick={() => setDirection("next")}
      >
        Next
      </button>
    ),
    prevArrow: (
      // Define a custom prev arrow component
      <button
        type="button"
        className="slick-prev"
        onClick={() => setDirection("prev")}
      >
        Prev
      </button>
    ),
  };

  // Define an array of sample products to display on the carousel
  const products = [
    { id: 1, name: "Product 1", image: "product1.jpg" },
    { id: 2, name: "Product 2", image: "product2.jpg" },
    { id: 3, name: "Product 3", image: "product3.jpg" },
    { id: 4, name: "Product 4", image: "product4.jpg" },
    { id: 5, name: "Product 5", image: "product5.jpg" },
    { id: 6, name: "Product 6", image: "product6.jpg" },
    { id: 7, name: "Product 7", image: "product7.jpg" },
    { id: 8, name: "Product 8", image: "product8.jpg" },
    { id: 9, name: "Product 9", image: "product9.jpg" },
  ];

  // Define a function to render each product card
  const renderProduct = (product) => {
    return (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </div>
    );
  };

  return (
    <div className="carousel-container">
      <h1>Carousel Example</h1>
      <p>
        Slide index: {slideIndex}, Direction: {direction}
      </p>
      <Slider {...settings}>{products.map(renderProduct)}</Slider>
    </div>
  );
};

export default Carousel;
