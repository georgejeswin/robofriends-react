import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">ROBOFRIENDS</h1>
      <input type="text" className="input" placeholder="Search Robots" />
    </div>
  );
};

export default Header;
