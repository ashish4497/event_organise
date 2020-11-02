import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="Header">
        <nav className="flex padding container">
          <div className="left-side ">
            <Link to="/">
              <div className="flex logo">
                <i class="fas fa-ankh"></i>
                <h1>Event organisers</h1>
              </div>
            </Link>
          </div>
          <div className="right-side flex">
            <Link to="/login">
              <h3>Login</h3>
            </Link>
            <Link to="/signup">
              <h3>Signup</h3>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
