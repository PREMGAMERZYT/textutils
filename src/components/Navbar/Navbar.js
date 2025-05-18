import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(probs) {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <p>TextUtlis</p>
          <div className="all-infopage">
            <ul>
              <li>
                <Link className="com" to="">
                  Home
                </Link>
              </li>
              <li>
                <Link className="com" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="com" to="">
                  Books
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="switch">
          <div className="button-body">
            <button
              className="btn-toggle"
              onClick={() => {
                probs.clicked();
                probs.handleDarkMode();
              }}
              style={probs.slider}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
