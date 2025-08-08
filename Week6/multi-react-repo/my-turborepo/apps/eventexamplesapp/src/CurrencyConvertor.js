import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rupees) {
      setEuros((rupees / 90).toFixed(2)); // approx 1 Euro = ₹90
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in Rupees"
        />
        <button type="submit">Convert</button>
      </form>
      {euros && (
        <p>
          {rupees} INR = {euros} EUR
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
