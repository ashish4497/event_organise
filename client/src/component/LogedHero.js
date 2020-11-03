import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogedHero extends Component {
  handleClick = (e) => {
    localStorage.clear();
  };
  render() {
    return (
      <>
        <div className="loged_header ">
          <nav className="flex padding container ">
            <div className="left_side">
              <ul>
                <li className="">
                  <Link to="/dashboard">
                    <i class="fas fa-ankh"></i>
                    <h1 className="text">Event organisers</h1>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="right_side">
              <ul className="flex">
                <li className="bg-box">
                  <Link to="/event">
                    <span className="text">Add event</span>
                    <i className="fas fa-plus"></i>
                  </Link>
                </li>
                <li className="log-out" onClick={this.handleClick}>
                  <Link to="/">
                    <p className="text">logout</p>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default LogedHero;
