import React from "react";
import { eventForm } from "../action";
import { connect } from "react-redux";
import LogedHero from "./LogedHero";

class Eventform extends React.Component {
  constructor() {
    super();
    this.state = {
      eventname: "",
      eventvenue: "",
      startdate: "",
      enddate: "",
      city: "",
      eventDescription: "",
      phoneNo: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(eventForm(this.state));
    this.props.history.push("/dashboard");
    window.location.reload();
  };

  render() {
    return (
      <>
        <LogedHero />
        <h1 className="container center heading">Add New Event </h1>
        <div className="container fome_container padding">
          <form action="/action_page.php">
            <label for="eventname">Event Name</label>
            <input
              type="text"
              id="fname"
              name="eventname"
              placeholder="Event name.."
              onChange={this.handleChange}
              required
            />

            <label for="eventvenue">Event Venue</label>
            <input
              type="text"
              id="add"
              name="eventvenue"
              placeholder="Enter Venue"
              onChange={this.handleChange}
              required
            />

            <label for="startdate">Event start date:</label>
            <input
              type="date"
              id="start"
              name="startdate"
              // value="2020-11-2"
              min="2018-01-01"
              max="2021-12-31"
              onChange={this.handleChange}
              required
            ></input>
            <label for="enddate">Event End date:</label>
            <input
              type="date"
              id="start"
              name="enddate"
              // value="2020-11-2"
              min="2018-01-01"
              max="2021-12-31"
              onChange={this.handleChange}
              required
            ></input>
            <label for="city">city</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Your City"
              onChange={this.handleChange}
              required
            />
            <label for="eventDescription">Event Description</label>
            <textarea
              type="text"
              id="eventDis"
              rows="6"
              cols="100"
              maxlength="100"
              name="eventDescription"
              placeholder="Event Detail max length 100 words"
              onChange={this.handleChange}
              required
            />
            <label for="phoneNo">Mobile Nb.</label>
            <input
              type="tel"
              id="phone"
              name="phoneNo"
              placeholder="Your Mobile No."
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={this.handleChange}
              required
            />
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Eventform);
