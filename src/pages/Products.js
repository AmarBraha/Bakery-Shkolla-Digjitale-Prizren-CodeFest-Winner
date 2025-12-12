import React, { useState, useEffect } from "react";
import { X, Heart, Plus, Minus } from "lucide-react";
import Counter from '../components/Counter';
import "./Products.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Products({ cart, setCart, favorites, setFavorites, showNotificationMsg, toggleFavorite }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);

  const products = [
    
    { id: 1, name: "Sourdough Loaf", price: "1.50€", category: "breads", image: "https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg", desc: "Naturally leavened with crispy crust and tangy flavor." },
    { id: 2, name: "Whole Wheat", price: "1.50€", category: "breads", image: "https://images.getrecipekit.com/20230728144103-md-100-whole-wheat-bread-11-1-of-1-scaled.jpg?aspect_ratio=4:3&quality=90&", desc: "Hearty whole grain, perfect for sandwiches." },
    { id: 3, name: "Butter Croissant", price: "0.75€", category: "breads", image: "https://sugargeekshow.com/wp-content/uploads/2022/11/croissants_featured.jpg", desc: "Flaky layers made with French butter." },
    { id: 4, name: "Everything Bagel", price: "1.00€", category: "breads", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1OpOHwEeR5q8ZMqRwQv_amSIRn1gtl8DCg&s", desc: "Boiled and baked with sesame, garlic, and onion." },
    { id: 5, name: "Ciabatta", price: "0.70€", category: "breads", image: "https://hostessatheart.com/wp-content/uploads/2025/02/Ciabatta-Bread-Recipe-1.jpg", desc: "Italian bread with airy crumb and olive oil finish." },
    { id: 6, name: "Rye Bread", price: "1.80€", category: "breads", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjMi0hGg3cyKme281lsUF4y4siQZBXNEKUw&s", desc: "Dense and flavorful with caraway seeds." },
    { id: 7, name: "Artisan Coffee", price: "1.20€", category: "beverages", image: "https://artisancoffeeaccess.files.wordpress.com/2015/04/shutterstock_75410191-96-1500-x-790-coffee-bottom.jpg", desc: "Single-origin organic coffee, rich and smooth." },
    { id: 8, name: "Fresh Orange Juice", price: "2.00€", category: "beverages", image: "https://www.knowyourproduce.com/wp-content/uploads/2014/04/fresh-squeezed-orange-juice-6.jpg", desc: "Cold-pressed daily from local oranges." },
    { id: 9, name: "Chai Latte", price: "2.50€", category: "beverages", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chai-latte-4e5fe2f.jpg?quality=90&resize=440,400", desc: "Spiced tea with steamed milk and honey." },
    { id: 10, name: "Herbal Tea", price: "2.50€", category: "beverages", image: "https://ca.brodandtaylor.com/cdn/shop/articles/dehydrated-tea-thumb_1024x.jpg?v=16486570375814-1769d1b1a72d", desc: "Chamomile, peppermint, or green tea." },
    { id: 11, name: "Glazed Donut", price: "1.00€", category: "sweets", image: "https://herbsandflour.com/wp-content/uploads/2020/02/Baked-Old-Fashioned-Glazed-Donuts-1-scaled.jpg", desc: "Classic glazed donut, light and fluffy." },
    { id: 12, name: "Chocolate Donut", price: "1.00€", category: "sweets", image: "https://thefirstyearblog.com/wp-content/uploads/2020/10/chocolate-donuts-Square2.png", desc: "Rich chocolate with sprinkles." },
    { id: 13, name: "Vanilla Cupcake", price: "3.25€", category: "sweets", image: "https://www.mybakingaddiction.com/wp-content/uploads/2011/07/unwrapped-vanilla-cupcake-700x1050.jpg", desc: "Moist vanilla cake with buttercream frosting." },
    { id: 14, name: "Red Velvet Cupcake", price: "0.70€", category: "sweets", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4Xjhu5NRz6359z4hHlIr1F7db8AlCBR6Ig&s", desc: "Classic red velvet with cream cheese frosting." },
    { id: 15, name: "Sugar-Free Almond Cookies", price: "2.20€", category: "organic", image: "https://www.eatingbirdfood.com/wp-content/uploads/2022/09/almond-cookies-hero.jpg", desc: "Sweetened with stevia, perfect for diabetics. Low glycemic index." },
    { id: 16, name: "Keto Seed Bread", price: "2.00€", category: "organic", image: "https://withfoodandlove.com/wp-content/uploads/2018/02/keto-bread-1-3.jpg", desc: "Zero sugar, grain-free. Packed with chia and flax seeds." },
    { id: 17, name: "Organic Green Tea", price: "2.50€", category: "organic", image: "https://www.bigelowtea.com/cdn/shop/files/kzbmciqfbilrgl7w7umo.jpg?v=1765352622&width=1800", desc: "Antioxidant-rich organic green tea. Supports healthy blood sugar." },
    { id: 18, name: "Sugar-Free Coconut Macaroons", price: "1.20€", category: "organic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AXx2K-sE5Q6MewzoRJ6iblXBrwe5eTMIkw&s", desc: "Naturally sweetened with erythritol. Gluten-free and diabetic-friendly." },
    { id: 19, name: "Whole Grain Diabetic Muffin", price: "1.75€", category: "organic", image: "https://static01.nyt.com/images/2016/02/24/dining/24FASTMUFFIN/24FASTMUFFIN-videoSixteenByNine1050.jpg", desc: "Low-carb, high-fiber muffin. Sweetened with monk fruit." },
    { id: 20, name: "Protein Power Smoothie", price: "3.50€", category: "organic", image: "https://www.crazyinspiredlife.com/wp-content/uploads/2018/02/smoothie-hero-2.jpg", desc: "Sugar-free protein smoothie with organic berries and spinach." },
    { id: 21, name: "Almond Flour Bread", price: "2.00€", category: "organic", image: "https://www.allrecipes.com/thmb/LcKp-iZ-0kSpMF0Lq1thHH-HQKY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/246002-almond-flour-bread-ddmfs-4x3-1085810891-dae43e02141447a2afe580ff0f621951.jpg", desc: "Gluten-free, low-carb almond flour bread. Perfect for diabetics." },
    { id: 22, name: "Chia Seed Pudding", price: "2.50€", category: "organic", image: "https://www.eatingwell.com/thmb/7dZe1DkZ7deV3AuhqMw_SMaBix8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-RM-chia-seed-pudding-hero-0359-5d8095204fa84a0a944c937dd11d1550.jpg", desc: "Omega-3 rich pudding with unsweetened almond milk. Sugar-free." },
    { id: 23, name: "Quinoa Energy Bars", price: "0.80€", category: "organic", image: "https://www.thespruceeats.com/thmb/MS3YZly6U87FaB6IZbrlxXnrysQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-107859534-588443315f9b58bdb34063c2.jpg", desc: "High-protein, low-sugar bars with nuts and seeds." },
    
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "breads", label: "Breads" },
    { id: "beverages", label: "Beverages" },
    { id: "sweets", label: "Sweets" },
    { id: "organic", label: "Organic & Diabetic-Friendly" },
  ];

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  const isFavorite = (productId) => favorites.some(item => item.id === productId);

  const handleAddToCart = (product, quantity = modalQuantity) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    showNotificationMsg(`Added ${quantity}x ${product.name} to cart!`);
  };

  const closeModal = () => { 
    setSelectedProduct(null); 
    setModalQuantity(1); 
  };
  
  const increaseModalQuantity = () => setModalQuantity(prev => prev + 1);
  const decreaseModalQuantity = () => setModalQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="bakery-container">
      <div id="topp-section">
        <div className="header-content">
          <h1>Products</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>/</span><a href="/products">Products</a>
          </div>
        </div>
      </div>

      <div className="bakery-wrapper">
        <div className="category-buttons">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              className={`category-btn ${activeCategory === cat.id ? "active" : ""}`} 
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`product-card ${product.category === 'organic' ? 'organic-product' : ''}`}
              onClick={() => setSelectedProduct(product)}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button 
                  className={`favorite-btn ${isFavorite(product.id) ? 'active' : ''}`} 
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(product); }}
                >
                  <Heart 
                    size={22} 
                    fill={isFavorite(product.id) ? "#dc2626" : "none"} 
                    color={isFavorite(product.id) ? "#dc2626" : "#fff"} 
                  />
                </button>
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <span className="price">{product.price}</span>
                </div>
                <p className="product-description">{product.desc}</p>
                <button 
                  className={`quick-add-btn ${product.category === 'organic' ? 'organic-btn' : ''}`}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    handleAddToCart(product, 1); 
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className={`modal-content ${selectedProduct.category === 'organic' ? 'organic-modal' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-wrapper">
              <button onClick={closeModal} className="modal-close-btn">
                <X size={24} />
              </button>
              <button 
                className={`modal-favorite-btn ${isFavorite(selectedProduct.id) ? 'active' : ''}`} 
                onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedProduct); }}
              >
                <Heart 
                  size={24} 
                  fill={isFavorite(selectedProduct.id) ? "#dc2626" : "none"} 
                  color={isFavorite(selectedProduct.id) ? "#dc2626" : "#4b5563"} 
                />
              </button>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            </div>
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <span className="modal-price">{selectedProduct.price}</span>
              </div>
              <p className="modal-description">{selectedProduct.desc}</p>
              <div className="modal-category">
                <span className={`category-badge ${selectedProduct.category === 'organic' ? 'organic' : ''}`}>
                  {selectedProduct.category}
                </span>
              </div>
              <div className="modal-quantity-section">
                <label className="modal-quantity-label">Quantity:</label>
                <div className="modal-quantity-controls">
                  <button onClick={decreaseModalQuantity} className="modal-quantity-btn">
                    <Minus size={20} />
                  </button>
                  <div className="modal-counter-wrapper">
                    <Counter 
                      value={modalQuantity} 
                      places={modalQuantity >= 100 ? [100, 10, 1] : modalQuantity >= 10 ? [10, 1] : [1]} 
                      fontSize={35} 
                      padding={8} 
                      gap={5} 
                      textColor={selectedProduct.category === 'organic' ? "#10b981" : "#78350f"} 
                      fontWeight={700} 
                    />
                  </div>
                  <button onClick={increaseModalQuantity} className="modal-quantity-btn">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              <div className="modal-actions">
                <button 
                  onClick={() => { handleAddToCart(selectedProduct); closeModal(); }} 
                  className="btn-add-to-cart"
                >
                  Add to Cart
                </button>
                <button onClick={closeModal} className="btn-close">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}