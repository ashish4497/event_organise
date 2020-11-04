import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../action/index";
import LogedHero from "./LogedHero";
// Heroku container
class Herocontainer extends Component {
  componentDidMount() {
    var url = "http://localhost:8000/api/v1/users/event/info";
    this.props.dispatch(fetchEvent(url));
  }

  render() {
    const formInfo = this.props.eventForm;
    console.log(formInfo, "check");
    return (
      <>
        <section className="event-cards">
          <LogedHero />
          <h1 className="container center heading">Events</h1>
          <div className=" grid-col-2 padding">
            {formInfo &&
              formInfo.map((val) => {
                return (
                  <>
                    <div className="container parent-bx ">
                      <div className="flex">
                        <span className="date">
                          {new Date(val.startdate).toLocaleDateString()}
                        </span>
                        <span>{val.eventname}</span>
                      </div>
                      <p>{val.eventDescription}</p>
                      <p>{val.city}</p>
                      <div className="flex">
                        <span className="date">
                          {new Date(val.enddate).toLocaleDateString()}
                        </span>
                        <span>{val.phoneNo}</span>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Herocontainer);
