import React, { useState } from "react";
import "../styles/OrderSummary.css";

const OrderSummary = () => {
  const [language, setLanguage] = useState("uk");
  const success = false;

  return (
    <div className="order-summary-wrapper">
      {!success && (
        <div className="language-switcher">
          <button
            className={`lang ${language === "en" ? "active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            Eng
          </button>
          <button
            className={`lang ${language === "uk" ? "active" : ""}`}
            onClick={() => setLanguage("uk")}
          >
            Укр
          </button>
        </div>
      )}
      <aside className="order-summary">
        <p className="title">Order info &lt;= 100 char.</p>
        <p className="description">Description &lt;= 400 char.</p>
        <div className="product">
          <p>Lamel Professional Smart Skin Compact Powder</p>
          <p className="gray">Пудра для обличчя</p>
        </div>
        <div className="price-box">
          <p className="highlight">5 days free</p>
          <p className="subtext">then 299.99 UAH per month</p>
        </div>
      </aside>
    </div>
  );
};

export default OrderSummary;