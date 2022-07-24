import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/tips">Tech Tips</NavLink>
    <NavLink to="/books">Books</NavLink>
    <NavLink to="/news">Tech News</NavLink>
  </div>
  )
}

export default NavBar;