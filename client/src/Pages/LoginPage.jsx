import React, { useState } from "react";
import "../App.css"; 

function LoginPage({ setIsAuthenticated, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
      setIsAuthenticated(true);
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error-text">{error}</p>}
      <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{" "}
        <button className="toggle-btn" onClick={() => setShowLogin(false)}>Sign Up</button>
      </p>
    </div>
  );
}

export default LoginPage;
