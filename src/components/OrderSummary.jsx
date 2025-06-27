import React from "react";
import "../styles/SuccessMessage.css"; 

const SuccessMessage = ({ amount, last4, company, onBack }) => {
  const transactionId = "#TXN" + Math.floor(Math.random() * 10000000);
  const now = new Date();
  const date = now.toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="success-container">
      <div className="check-icon">
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="#4CAF50"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

      <h2>Оплату успішно здійснено!</h2>
      <p>Дякуємо за вашу покупку!</p>

      <div className="receipt-box">
        <p><strong>Сума:</strong> {amount.toFixed(2)} UAH</p>
        <p><strong>Спосіб оплати:</strong> Visa •••• {last4}</p>
        <p><strong>Дата і час:</strong> {date}, {time}</p>
        <p><strong>Номер транзакції:</strong> {transactionId}</p>
        <p><strong>Отримувач:</strong> {company}</p>
      </div>

      <button className="home-button" onClick={onBack}>Повернутись на головну</button>
      <button className="pdf-button">Завантажити квитанцію (PDF)</button>
    </div>
  );
};

export default SuccessMessage;