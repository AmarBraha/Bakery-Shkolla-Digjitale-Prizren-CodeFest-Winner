import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import ContactPage from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import Bakey from "./components/Bakey";
import CheckoutForm from "./components/CheckoutForm";
import './components/theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dashboard from "./pages/Dashboard"

// Create a wrapper component to handle conditional rendering
function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
 
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 10,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);
 
  const showNotificationMsg = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };
 
  const toggleFavorite = (product) => {
    const isFav = favorites.some(item => item.id === product.id);
    if (isFav) {
      setFavorites(favorites.filter(item => item.id !== product.id));
      showNotificationMsg("Removed from favorites");
    } else {
      setFavorites([...favorites, product]);
      showNotificationMsg("Added to favorites!");
    }
  };
 
  const handleCheckoutSuccess = () => {
    setCart([]);
    setIsCheckoutOpen(false);
    showNotificationMsg("Order placed successfully!");
  };

  return (
    <>
      {!isDashboard && <BackToTopButton />}
      {!isDashboard && <Bakey />}
      
      {showNotification && (
        <div className="notification">
          <span>{notificationMessage}</span>
        </div>
      )}

      <ScrollToTop />
      
      {!isDashboard && (
        <Navbar 
          cart={cart}
          setCart={setCart}
          favorites={favorites}
          setFavorites={setFavorites}
          toggleFavorite={toggleFavorite}
          setIsCheckoutOpen={setIsCheckoutOpen}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route 
          path="/products" 
          element={
            <Products 
              cart={cart}
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
              showNotificationMsg={showNotificationMsg}
              toggleFavorite={toggleFavorite}
            />
          } 
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      {!isDashboard && <Footer />}

      <CheckoutForm
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onSuccess={handleCheckoutSuccess}
      />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App">
      <Loader loading={loading} />
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}
 
export default App;