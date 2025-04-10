import React, { useState } from "react";
import "../App.css";

function SignupPage({ setIsAuthenticated, setShowLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      setError("User already exists! Try logging in.");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="page-container">
      {/* Background Carousel */}
      <div className="carousel">
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
      </div>

      {/* Glassmorphic Signup Box */}
      <div className="auth-container">
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>Sign Up</h2>
        {error && <p className="error-text">{error}</p>}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p style={{ color: "#fff", marginTop: "10px" }}>
          Already have an account?{" "}
          <button className="toggle-btn" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
