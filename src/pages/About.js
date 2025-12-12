import React from "react";
import "./About.css";
import Image1 from "../images/about-us-image-1.jpg";
import Image11 from "../images/Gemini_Generated_Image_j2hu6sj2hu6sj2hu.png";
import Image2 from "../images/about-us-image-2.jpg";
import Reviews from "../components/reviews.js";
import CountUp from "../components/CountUp.js";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate("/contact");
  };
  return (
    <div className="about-page">
      <div id="topp-section">
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{ color: "white", fontSize: "3rem", marginBottom: "10px" }}
          >
            About Us
          </h1>
          <a
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
          >
            Home
            <span>
              {" / "}
              <a
                href="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About Us
              </a>
            </span>
          </a>
        </div>
      </div>

      <div id="first-section">
        <div className="about-content">
          <div className="section-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_11_54272)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.76653 0.676086C9.79769 0.571324 9.89424 0.499023 10.0038 0.499023C10.1133 0.499023 10.2098 0.571324 10.241 0.676086C10.241 0.676086 10.6752 2.13156 11.1406 3.69267C11.8822 6.1798 13.8278 8.12534 16.3149 8.86692C17.876 9.33232 19.3314 9.76653 19.3314 9.76653C19.4362 9.7977 19.5085 9.89425 19.5085 10.0038C19.5085 10.1133 19.4362 10.2098 19.3314 10.241C19.3314 10.241 17.876 10.6752 16.3149 11.1406C13.8278 11.8822 11.8822 13.8278 11.1406 16.3149C10.6752 17.876 10.241 19.3315 10.241 19.3315C10.2098 19.4362 10.1133 19.5085 10.0038 19.5085C9.89424 19.5085 9.79769 19.4362 9.76653 19.3315C9.76653 19.3315 9.33231 17.876 8.86692 16.3149C8.12533 13.8278 6.17979 11.8822 3.69266 11.1406C2.13156 10.6752 0.676086 10.241 0.676086 10.241C0.571318 10.2098 0.499023 10.1133 0.499023 10.0038C0.499023 9.89425 0.571318 9.7977 0.676086 9.76653C0.676086 9.76653 2.13156 9.33232 3.69266 8.86692C6.17979 8.12534 8.12534 6.1798 8.86692 3.69267C9.33231 2.13156 9.76653 0.676086 9.76653 0.676086Z"
                  fill="#8B5E3C"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_54272">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="section-subtitle">About Us</p>
          </div>

          <h1 className="about-title">Baking with heart, heritage,</h1>
          <h1 className="about-title-italic">
            and a whole <span>lot of butter</span>
          </h1>
          <br />
          <p className="about-description">
            At our bakery, we believe that baking is not just a craft, but an
            art form that brings joy and comfort to people's lives.
          </p>
          <p className="about-description">
            Our journey began with a simple passion for creating delicious baked
            goods that evoke nostalgia and warmth.
          </p>
          <br />
          <p className="about-description">
            Over the years, we've honed our skills and perfected our recipes to
            offer a wide range of treats that cater to every palate.
          </p>
          <br />
          <div className="features-grid">
            <div className="feature-item">
              <svg
                className="feature-check-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="feature-text">Quality Ingredients</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-check-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="feature-text">Freshly Baked with Care</span>
            </div>
          </div>
          <br />
          <button className="getstarted" onClick={gotoContact}>
            <span>Contact Us ➚</span>
          </button>
        </div>
        <div className="about-images">
          <div className="about-image-container">
            <img className="about-image" src={Image1} alt="Bakery interior" data-aos="zoom-in-right" />
            <img className="about-image" src={Image2} alt="Bakery products"  data-aos="zoom-in-right"/>
          </div>
        </div>
      </div>

      <div id="second-section">
        <div className="approach-header">
          <div className="section-header-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_11_54272)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.76653 0.676086C9.79769 0.571324 9.89424 0.499023 10.0038 0.499023C10.1133 0.499023 10.2098 0.571324 10.241 0.676086C10.241 0.676086 10.6752 2.13156 11.1406 3.69267C11.8822 6.1798 13.8278 8.12534 16.3149 8.86692C17.876 9.33232 19.3314 9.76653 19.3314 9.76653C19.4362 9.7977 19.5085 9.89425 19.5085 10.0038C19.5085 10.1133 19.4362 10.2098 19.3314 10.241C19.3314 10.241 17.876 10.6752 16.3149 11.1406C13.8278 11.8822 11.8822 13.8278 11.1406 16.3149C10.6752 17.876 10.241 19.3315 10.241 19.3315C10.2098 19.4362 10.1133 19.5085 10.0038 19.5085C9.89424 19.5085 9.79769 19.4362 9.76653 19.3315C9.76653 19.3315 9.33231 17.876 8.86692 16.3149C8.12533 13.8278 6.17979 11.8822 3.69266 11.1406C2.13156 10.6752 0.676086 10.241 0.676086 10.241C0.571318 10.2098 0.499023 10.1133 0.499023 10.0038C0.499023 9.89425 0.571318 9.7977 0.676086 9.76653C0.676086 9.76653 2.13156 9.33232 3.69266 8.86692C6.17979 8.12534 8.12534 6.1798 8.86692 3.69267C9.33231 2.13156 9.76653 0.676086 9.76653 0.676086Z"
                  fill="#8B5E3C"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_54272">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="section-subtitle">Our Approach</p>
          </div>
          <h1 className="approach-title">Wholesome values behind every</h1>
          <h1 className="approach-title-italic">
            freshly <span>baked item</span>
          </h1>
        </div>

        <div className="approach-section">
          <div id="Image">
            <div className="image-section">
              <img
              data-aos="fade-right"
                src={Image11}
                alt="Bakery approach"
                className="approach-image"
              />
            </div>
          </div>

          <div id="Divat">



            <div data-aos="fade-up">
            <div className="Mission">
              <div className="value-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8b5e3c"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-blocks-icon lucide-blocks"
                >
                  <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
                  <rect x="14" y="2" width="8" height="8" rx="1" />
                </svg>
                <h2>Our Mission</h2>
              </div>
              <p>
                Baking isn't just what we do — it's who we are. Every loaf,
                pastry, and cake is handcrafted with care, patience, and love.
              </p>
            </div>
            </div>

            <div data-aos="fade-up" duration="500">

            <div className="Mission">
              <div className="value-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8b5e3c"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-eye-icon lucide-eye"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <h2>Our Vision</h2>
              </div>
              

              <p>
                To become the most beloved bakery in our community, spreading
                joy through exceptional baked goods and warm hospitality.
              </p>
            </div>
            </div>




            <div data-aos="fade-up" duration="700">
            <div className="Mission">
              <div className="value-header">
                <svg
                  className="value-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8b5e3c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                  <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                  <path d="M2 12a10 10 0 0 1 18-6" />
                  <path d="M2 16h.01" />
                  <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                  <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
                  <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                  <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
                </svg>
                <h2>Our Values</h2>
              </div>
              <p>
                Quality, authenticity, and community. We believe in using the
                finest ingredients and traditional techniques to create
                memorable experiences.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div id="third-section">
        <div className="approach-header">
          <div className="section-header-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            </svg>
            <p
              style={{
                fontStyle: "italic",
                color: "#fff",
                fontWeight: 500,
                fontSize: 18,
                margin: 0,
              }}
            >
              Our Achievements
            </p>
          </div>
          <h1 style={{ color: "#fff", margin: "10px 0" }}>
            Numbers that speak for
          </h1>
          <h1 style={{ margin: "0 0 20px 0" }}>
            <span
              style={{ fontStyle: "italic", fontWeight: 400, color: "#fff" }}
            >
              themselves
            </span>
          </h1>
        </div>

        <div className="stats-container">

          <div data-aos="fade-up" duration="300">
          <div className="stat-card">
            <div className="stat-number">
              <p>
                <CountUp
                  from={0}
                  to={25}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </p>
            </div>
            <div className="stat-label">Years Experience</div>
            <p className="stat-description">
              Serving fresh baked goods since 1999
            </p>
          </div>
          </div>










          <div data-aos="fade-up" duration="500">
          <div className="stat-card">
            <div className="stat-number">
              <p>
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </p>
            </div>
            <div className="stat-label">Happy Customers</div>
            <p className="stat-description">
              Building relationships one loaf at a time
            </p>
          </div>
          </div>







        
            <div data-aos="fade-up" duration="500">
          <div className="stat-card">
            <div className="stat-number">
              <p>
                <CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </p>
            </div>
            <div className="stat-label">Products</div>
            <p className="stat-description">
              From artisan breads to sweet pastries
            </p>
          </div>
            </div>




            <div data-aos="fade-up" duration="700">
          <div className="stat-card">
            <div className="stat-number">
              <p>
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                %
              </p>
            </div>
            <div className="stat-label">Fresh Daily</div>
            <p className="stat-description">
              Baked fresh every morning with love
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
