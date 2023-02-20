import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate()
  const searchCharacter = (e) => {
    setText(e.target.value)
    if (e.key === "Enter") {
      navigate(`/search/${text}`)
    }
  };
  return (
    <div className="header">
      <span>Header</span>
      <input type="text" name="search" onKeyUp={searchCharacter} />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
