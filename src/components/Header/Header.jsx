import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <span>Header</span>
      <nav>
        <span>Home</span>
        <span>Contact</span>
      </nav>
      <div className="message">Message Normal</div>
      <div className="success">Success message</div>
      <div className="error">Error message</div>
    </div>
  );
};

export default Header;
