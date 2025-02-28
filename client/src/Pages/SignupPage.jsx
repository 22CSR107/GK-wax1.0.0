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
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      setError("User already exists! Try logging in.");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="error-text">{error}</p>}
      <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account?{" "}
        <button className="toggle-btn" onClick={() => setShowLogin(true)}>Login</button>
      </p>
    </div>
  );
}

export default SignupPage;
