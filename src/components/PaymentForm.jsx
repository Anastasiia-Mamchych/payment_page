import React, { useState } from "react";
import "../styles/PaymentForm.css";

const PaymentForm = ({ onSuccess }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      newErrors.expiry = "Format MM/YY";
    }
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);
  
  if (Object.keys(validationErrors).length === 0) {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const digits = cardNumber.replace(/\s+/g, "").slice(-4); 
      onSuccess(digits); 
    }, 1500);
  }
};


  return (
    <div>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="back-link-wrapper">
          <a
            href="/"
            className={`back-link ${isBackHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsBackHovered(true)}
            onMouseLeave={() => setIsBackHovered(false)}
          >
            <svg
              className="arrow-icon"
              width="14"
              height="12"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L7 1M1 7L7 13M1 7H15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{isBackHovered ? "Back" : "Checkout"}</span>
          </a>
        </div>

        <h2>5 days free</h2>
        <p className="subtext">then 299.99 UAH per month</p>

        <button type="button" className="apple-pay">
          <img src="/logo.png" alt="Apple Logo" className="apple-icon" />
          <span>Pay</span>
        </button>

        <div className="divider">
          <hr />
          <span>or pay with card</span>
          <hr />
        </div>

        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            value={cardNumber}
             maxLength="16"
            onChange={(e) => setCardNumber(e.target.value)}

          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>

        <div className="inline-fields">
  <div className="expiry-field">
  <label>Expiration Date</label>
  <input
    type="text"
    placeholder="MM/YY"
    value={expiry}
    maxLength="5"
    onChange={(e) => {
      let value = e.target.value;
      value = value.replace(/\//g, '');
      value = value.replace(/\D/g, ''); 
      
      if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      if (value.length > 5) {
        value = value.substring(0, 5);
      }
      
      setExpiry(value);
    }}
  />
  {errors.expiry && <span className="error">{errors.expiry}</span>}
</div>
  
  <div className="cvc-field">
    <label>CVC</label>
    <div className="cvc-input-wrapper">
      <input
        type="password"
        placeholder="•••"
        value={cvv}
         maxLength="3"
        onChange={(e) => setCvv(e.target.value)}
      />
      <img src="/CVC-info.svg" alt="CVC info" className="cvc-icon" />
      <div className="tooltip">The 3-digit code on the back of your card</div>
    </div>
    {errors.cvv && <span className="error">{errors.cvv}</span>}
  </div>
</div>

        <button 
          type="submit" 
          className={`pay-btn ${isProcessing ? "processing" : ""}`}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="spinner-text">
              <span className="spinner"></span>
              Processing...
            </span>
          ) : (
            "Pay 299.99 UAH"
          )}
        </button>

        <p className="info">
          You'll have your <strong>Plan Pro during 1 year</strong>. After this
          period of time, your plan will be <strong>automatically renewed</strong>{" "}
          with its original price without any discounts applied.
        </p>
      </form>
    </div>
  );
};

export default PaymentForm;