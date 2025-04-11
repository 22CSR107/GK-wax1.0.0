import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SearchPage from "./Pages/SearchPage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import OrderPage from "./Pages/OrderPage"; // import OrderPage

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [activePageIndex, setActivePageIndex] = useState(0);

  // Extend navbar to include OrderPage
  const NAVBAR_ITEMS = [
    { icon: "🏠", text: "Home", component: <HomePage /> },
    { icon: "🖼️", text: "About", component: <AboutPage /> },
    { icon: "🔍", text: "Search", component: <SearchPage setActivePageIndex={setActivePageIndex} /> },
    { icon: "🛒", text: "Order", component: <OrderPage setActivePageIndex={setActivePageIndex} /> }, // FIXED: pass setActivePageIndex here
    { icon: "👤", text: "Profile", component: <ProfilePage /> },
  ];

  if (!isAuthenticated) {
    return (
      <div className="auth-background">
        {showLogin ? (
          <LoginPage setIsAuthenticated={setIsAuthenticated} setShowLogin={setShowLogin} />
        ) : (
          <SignupPage setIsAuthenticated={setIsAuthenticated} setShowLogin={setShowLogin} />
        )}
      </div>
    );
  }

  return (
    <div className="app">
      <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
      <div className="main-container">{NAVBAR_ITEMS[activePageIndex].component}</div>
    </div>
  );
}

export default App;
