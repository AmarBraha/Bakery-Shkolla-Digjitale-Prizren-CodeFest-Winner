import React, { useState, useEffect } from "react";
import "./Slider.css";
import Image1 from "../images/fresh-baked-sweet-delights-rustic-bakery-shelf-generated-by-ai.jpg";
import Image2 from "../images/hero-image.jpg";
import Image3 from "../images/interior-of-a-bakery.webp";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: Image1,
    title: "Welcome to Our Bakery",
    text: "Freshly baked goods every day!",
  },
  {
    image: Image2,
    title: "Delicious Pastries",
    text: "Try our croissants and danishes!",
  },
  {
    image: Image3,
    title: "Artisan Breads",
    text: "Baked with love and tradition.",
  },
];

function Slider() {
  const navigate = useNavigate();
  const gotoProducts = () => {
    navigate("/products");
  };

  const [current, setCurrent] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Force re-render to restart CSS animations
    setAnimationKey(prev => prev + 1);
  }, [current]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div id="Slider">
      <div className="slider-images">
        <img src={slides[current].image} alt={slides[current].title} />
      </div>
      <div className="slider-text" key={animationKey}>
        <h2 className="slide-title">
          {slides[current].title}
        </h2>
        <p className="slide-subtext">
          {slides[current].text}
        </p>
        
        <button className="slider-action-btn pulse-btn" onClick={gotoProducts}>
          Explore Menu
        </button>
      </div>
      <button className="slider-btn slider-btn-left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-btn slider-btn-right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Slider;