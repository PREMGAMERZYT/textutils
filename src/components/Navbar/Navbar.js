import React from "react";
import "./navbar.css";

function Navbar(probs) {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <p>TextUtlis</p>
          <div className="all-infopage">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Books</li>
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
