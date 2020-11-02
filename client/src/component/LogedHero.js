import React, { Component } from "react";
import { Link } from "react-router-dom";
import Herocontainer from "./Herocontainer";

class LogedHero extends Component {
  render() {
    return (
      <>
        <div className="trello_header ">
          <nav className="flex padding container ">
            <div className="left_side">
              <ul>
                <li className="">
                  <Link to="#">
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
                <li className="log-out">
                  <Link to="#">
                    <p className="text">logout</p>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="trello_hero_container">
          <div className="container padding">
            <Herocontainer />
          </div>
        </div>
      </>
    );
  }
}

export default LogedHero;