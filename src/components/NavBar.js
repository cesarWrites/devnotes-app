import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <nav>
      <ul>
        <li>
    <NavLink to="/">Home</NavLink>
    </li>
    <li><NavLink to="/tips">Tech Tips</NavLink>
    </li>
    <li><NavLink to="/books">Books</NavLink>
    </li>
    <li><NavLink to="/news">Tech News</NavLink>
    </li>
    </ul>
    </nav>
  </div>
  )
}

export default NavBar;