import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (name.trim().length < 5) {
      tempErrors.name = "Name must be at least 5 characters long.";
    }

    if (!email.includes("@") || !email.includes(".")) {
      tempErrors.email = "Enter a valid email address.";
    }

    if (password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`Registration successful!\nName: ${name}\nEmail: ${email}`);
      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Mail Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
