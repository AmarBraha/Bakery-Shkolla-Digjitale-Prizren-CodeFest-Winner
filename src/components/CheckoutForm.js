import React, { useState } from "react";
import "./CheckoutForm.css";

// Simple SVG Icons
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const TableIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 9h18M3 15h18M3 9v6M21 9v6" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const BanknoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="12" x="2" y="6" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ReceiptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 17.5v-11" />
  </svg>
);

const CheckoutForm = ({ isOpen, onClose, cart, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    tableNumber: "",
    paymentMethod: "",
  });

  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.paymentMethod) return;

    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsProcessing(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    if (isSuccess) {
      onSuccess();
    }
    setIsSuccess(false);
    setFormData({
      fullName: "",
      tableNumber: "",
      paymentMethod: "",
    });
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const isFormValid = formData.fullName && formData.tableNumber && formData.paymentMethod;

  if (!isOpen) return null;

  return (
    <div className="checkout-overlay" onClick={handleOverlayClick}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        {isSuccess ? (
          <div className="success-content">
            <div className="success-icon">
              <CheckIcon />
            </div>
            <h2 className="success-title">Order Confirmed!</h2>
            <p className="success-message">
              Thank you, <span className="highlight">{formData.fullName}</span>!
            </p>

            {/* Receipt/Bill */}
            <div className="receipt-container">
              <div className="receipt-header">
                <div className="receipt-header-left">
                  <ReceiptIcon />
                  <span>Order Receipt</span>
                </div>
                <span className="receipt-table">Table {formData.tableNumber}</span>
              </div>

              <div className="receipt-items">
                {cart.map((item) => {
                  const itemPrice = parseFloat(item.price.replace("$", ""));
                  const lineTotal = itemPrice * item.quantity;
                  return (
                    <div key={item.id} className="receipt-item">
                      <div className="receipt-item-info">
                        <p className="receipt-item-name">{item.name}</p>
                        <p className="receipt-item-qty">
                          {item.quantity} × {itemPrice.toFixed(2)}€
                        </p>
                      </div>
                      <span className="receipt-item-total">
                        {lineTotal.toFixed(2)}€
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="receipt-divider dashed" />

              <div className="receipt-total-row">
                <span className="receipt-total-label">Total</span>
                <span className="receipt-total-value">
                  {totalPrice.toFixed(2)}€
                </span>
              </div>

              <div className="receipt-divider" />

              <div className="receipt-payment-row">
                <span className="receipt-payment-label">Payment Method</span>
                <span className="receipt-payment-value">
                  {formData.paymentMethod === "cash" ? (
                    <>
                      <span className="icon-cash"><BanknoteIcon /></span>
                      Cash
                    </>
                  ) : (
                    <>
                      <span className="icon-card"><CreditCardIcon /></span>
                      Card
                    </>
                  )}
                </span>
              </div>
            </div>

            <button onClick={handleClose} className="done-btn">
              Done
            </button>
          </div>
        ) : (
          <div className="checkout-content">
            <div className="checkout-header">
              <h2 className="checkout-title">Checkout</h2>
              <button onClick={handleClose} className="checkout-close-btn">
                <XIcon />
              </button>
            </div>

            {/* Order Summary Preview */}
            <div className="order-summary">
              <div className="order-summary-top">
                <span className="order-summary-count">{cart.length} items</span>
                <span className="order-summary-total">{totalPrice.toFixed(2)}€</span>
              </div>
              <div className="order-summary-items">
                {cart.map((item, idx) => (
                  <span key={item.id}>
                    {item.quantity}× {item.name}{idx < cart.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="checkout-form">
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">
                  <UserIcon />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="form-input"
                />
              </div>

              {/* Table Number */}
              <div className="form-group">
                <label className="form-label">
                  <TableIcon />
                  Table Number
                </label>
                <div className="select-wrapper">
                  <select
                    name="tableNumber"
                    value={formData.tableNumber}
                    onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })}
                    required
                    className="form-select"
                  >
                    <option value="">Select your table</option>
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num.toString()}>
                        Table {num}
                      </option>
                    ))}
                  </select>
                  <div className="select-arrow">
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="form-group">
                <div className="payment-label">Payment Method</div>
                <div className="payment-options">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: "cash" })}
                    className={`payment-btn ${formData.paymentMethod === "cash" ? "selected" : ""}`}
                  >
                    <BanknoteIcon />
                    <span>Cash</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
                    className={`payment-btn ${formData.paymentMethod === "card" ? "selected" : ""}`}
                  >
                    <CreditCardIcon />
                    <span>Card</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing || !isFormValid}
                className="submit-btn"
              >
                {isProcessing ? (
                  <>
                    <div className="spinner" />
                    Processing...
                  </>
                ) : (
                  <>
                    Place Order
                    <CheckIcon />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
