import React from "react";
import "./Navbar.css";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <div className="navbar-links">
        <button className="navbar-link" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
