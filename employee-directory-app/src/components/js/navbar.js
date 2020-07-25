import React from "react";
import "../css/Navbar.css";
import SearchBox from "./SearchBox.js";

function Navbar() {
  // Display Navbar
  return (
    <div className="navbar">
      <SearchBox />
    </div>
  );
}
export default Navbar;
