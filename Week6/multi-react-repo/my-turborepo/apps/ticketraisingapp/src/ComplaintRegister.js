import React, { useState } from "react";

function ComplaintRegister() {
  const [name, setName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !complaint.trim()) {
      alert("Please fill out both fields before submitting.");
      return;
    }

    const referenceNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit number
    alert(
      `Complaint Registered!\nReference No: ${referenceNumber}\nName: ${name}\nComplaint: ${complaint}`
    );

    // Clear form after submission
    setName("");
    setComplaint("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Complaint Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Employee Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Complaint:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
            rows="4"
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
