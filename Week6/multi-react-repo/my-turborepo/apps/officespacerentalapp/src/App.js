import React from "react";

function App() {
  // Object for single office space
  const office = {
    name: "Tech Park",
    rent: 55000,
    address: "123 IT Street, Hyderabad",
  };

  // List of multiple office spaces
  const offices = [
    { name: "Tech Park", rent: 55000, address: "123 IT Street, Hyderabad" },
    {
      name: "Startup Hub",
      rent: 65000,
      address: "456 Innovation Road, Bangalore",
    },
    {
      name: "Corporate Heights",
      rent: 70000,
      address: "789 Business Ave, Mumbai",
    },
    {
      name: "Budget Suites",
      rent: 45000,
      address: "321 Affordable Lane, Pune",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Heading */}
      <h1 style={{ textAlign: "center" }}>Office Space Rental App</h1>

      {/* Single Office */}
      <h2>Featured Office</h2>
      <p>Name: {office.name}</p>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: ₹{office.rent}
      </p>
      <p>Address: {office.address}</p>

      <hr />

      {/* Multiple Offices List */}
      <h2>All Office Spaces</h2>
      <ul>
        {offices.map((o, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <strong>{o.name}</strong> -
            <span
              style={{
                color: o.rent < 60000 ? "red" : "green",
                marginLeft: "5px",
              }}
            >
              ₹{o.rent}
            </span>
            <div>{o.address}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
