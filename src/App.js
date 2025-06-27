import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import OrderSummary from "./components/OrderSummary";
import SuccessMessage from "./components/SuccessMessage";
import "./styles/App.css";

function App() {
  const [success, setSuccess] = useState(false);

  const [cardLast4, setCardLast4] = useState("");
  const amount = 299.99;
  const companyName = "solid";
  
<p style={{ color: 'red' }}>Test message</p>

  return (
    <div className="app-container">
      {!success ? (
        <main className="content">
          <PaymentForm onSuccess={(cardDigits) => {
            setCardLast4(cardDigits);
            setSuccess(true);
          }} />
          <OrderSummary />
        </main>
      ) : (
        <SuccessMessage
          amount={amount}
          last4={cardLast4}
          company={companyName}
          onBack={() => setSuccess(false)}
        />
      )}
      <footer className="footer">Powered by <strong>Solid</strong></footer>
    </div>
  );
}

export default App;
