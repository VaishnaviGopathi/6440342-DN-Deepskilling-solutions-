// CurrencyConverter.js
import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const rates = [
      { name: 'Euro', rate: 80 },
      { name: 'Dollar', rate: 75 },
      { name: 'Yen', rate: 0.65 }
    ];

    let convertedAmount = 0;
    for (let i = 0; i < rates.length; i++) {
      if (rates[i].name === currency) {
        convertedAmount = amount * rates[i].rate;
        break;
      }
    }

    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Euro">Euro</option>
            <option value="Dollar">Dollar</option>
            <option value="Yen">Yen</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
