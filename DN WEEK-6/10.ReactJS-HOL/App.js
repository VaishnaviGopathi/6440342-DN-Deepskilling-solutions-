import React from "react";
import "./App.css";

function App() {
  // Office object
  const office1 = {
    name: "WeWork Hyderabad",
    rent: 55000,
    address: "Madhapur, Hyderabad",
    image: "https://via.placeholder.com/300x200?text=Office+Image+1",
  };

  // List of offices
  const offices = [
    {
      name: "SmartWorks Bengaluru",
      rent: 65000,
      address: "Indiranagar, Bengaluru",
      image: "https://via.placeholder.com/300x200?text=Office+Image+2",
    },
    {
      name: "CoWrks Chennai",
      rent: 58000,
      address: "T Nagar, Chennai",
      image: "https://via.placeholder.com/300x200?text=Office+Image+3",
    },
    office1,
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

      {offices.map((office, index) => (
        <div key={index} className="office-card">
          <img src={office.image} alt={office.name} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent > 60000 ? "green" : "red" }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
