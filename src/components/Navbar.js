import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "../components/ThemeSwitch";
import "./Navbar.css";
import { CartButton, FavoritesButton } from "./CartFavorites";
import { LayoutDashboard } from "lucide-react";


const Navbar = ({ cart, setCart, favorites, setFavorites, toggleFavorite, setIsCheckoutOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleThemeToggle = (checked) => {
    setIsDark(checked);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.className = isDark ? "dark-theme" : "light-theme";
  }, [isDark]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-left">
          <div className="logo-icon">🍞</div>
          <h1 className="logo-text">Bakery</h1>
        </div>
      </Link>

      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-cart-favorites">
          <Link to="/dashboard" className="dashboard-button">
            <div className="dashboard-badge-wrapper">
              <LayoutDashboard className="dashboard-icon" size={24} />
            </div>
          </Link>
          <FavoritesButton 
            favorites={favorites} 
            onUpdateFavorites={setFavorites}
            onSelectProduct={() => {}}
            onToggleFavorite={toggleFavorite}
          />
          <CartButton 
            cart={cart}
            onUpdateCart={setCart}
            onSelectProduct={() => {}}
            onCheckout={() => setIsCheckoutOpen(true)}
          />
        </div>
        
        <ThemeSwitch isDark={isDark} onToggle={handleThemeToggle} class="ThemeSwitch"/>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;