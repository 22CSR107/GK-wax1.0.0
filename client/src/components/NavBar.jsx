import React from "react";
import "../App.css";

function NavBar({ ITEMS, setActivePageIndex }) {
  return (
    <nav className="navbar">
      {ITEMS.map((item, index) => (
        <button key={index} className="nav-item" onClick={() => setActivePageIndex(index)}>
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-text">{item.text}</span>
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
