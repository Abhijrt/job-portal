import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
        <Link className="link" to="/">
          Job Portal
        </Link>
      </label>
      <ul>
        <li>
          <Link className="link" to="/shortlisted">
            Selection
          </Link>
        </li>
        <li>
          <Link className="link" to="/rejected">
            Rejection
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
