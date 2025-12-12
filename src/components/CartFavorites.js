import React, { useState } from "react";
import { ShoppingCart, Heart, X, Minus, Plus, Trash2 } from "lucide-react";
import "./CartFavorites.css";

export function CartButton({ cart, onUpdateCart, onSelectProduct, onCheckout }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const updateQuantity = (productId, change) => {
    onUpdateCart(
      cart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    onUpdateCart(cart.filter((item) => item.id !== productId));
  };

  const getCartTotal = () => {
    return cart
      .reduce((total, item) => {
        const price =
          typeof item.price === "string"
            ? parseFloat(item.price.replace("€", ""))
            : parseFloat(item.price);
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    if (onCheckout) onCheckout();
  };

  return (
    <>
      
        
      <div className="header-buttons">
        <div className="cart-badge-wrapper" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart className="cart-icon" size={28} />
          {getTotalItems() > 0 && <span className="cart-count">{getTotalItems()}</span>}
        </div>
      </div>
      

      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-sidebar-header">
          <h2>Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="cart-close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="cart-sidebar-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={48} />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">
                    {typeof item.price === "string"
                      ? item.price
                      : `$${item.price.toFixed(2)}`}
                  </p>

                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="quantity-btn"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="quantity">{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="quantity-btn"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">{getCartTotal()}€</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      )}
    </>
  );
}

export function FavoritesButton({
  favorites,
  onUpdateFavorites,
  onSelectProduct,
  onToggleFavorite,
}) {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  return (
    <>
      

      <div className="header-buttons">
        <div className="favorites-badge-wrapper" onClick={() => setIsFavoritesOpen(true)}>
          <Heart className="favorites-icon" size={28} />
          {favorites.length > 0 && (
            <span className="favorites-count">{favorites.length}</span>
          )}
        </div>
      </div>
      

      <div className={`favorites-sidebar ${isFavoritesOpen ? "open" : ""}`}>
        <div className="favorites-sidebar-header">
          <h2>My Favorites</h2>
          <button onClick={() => setIsFavoritesOpen(false)} className="favorites-close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="favorites-sidebar-content">
          {favorites.length === 0 ? (
            <div className="favorites-empty">
              <Heart size={48} />
              <p>No favorites yet</p>
              <span>Click the heart icon on products to add them here</span>
            </div>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                className="favorites-item"
                onClick={() => {
                  onSelectProduct(item);
                  setIsFavoritesOpen(false);
                }}
              >
                <img src={item.image} alt={item.name} className="favorites-item-image" />
                <div className="favorites-item-details">
                  <h3>{item.name}</h3>
                  <p className="favorites-item-price">{item.price}</p>
                  <span className="favorites-item-category">{item.category}</span>
                </div>

                <button
                  className="favorites-remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(item);
                  }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {favorites.length > 0 && (
          <div className="favorites-sidebar-footer">
            <p>
              {favorites.length} item{favorites.length !== 1 ? "s" : ""} in favorites
            </p>
          </div>
        )}
      </div>

      {isFavoritesOpen && (
        <div className="cart-overlay" onClick={() => setIsFavoritesOpen(false)} />
      )}
    </>
  );
}
