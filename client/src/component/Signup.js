import React from "react";
import { connect } from "react-redux";
import { signup } from "../action/index";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.props.dispatch);
    e.preventDefault();
    this.props.dispatch(
      signup(this.state, (sucess) => {
        this.props.history.push("/login");
      })
    );
  };

  render() {
    return (
      <>
        <section className="signup_form container padding">
          <div className="form">
            <form>
              <label>
                <b>Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={this.handleChange}
                required
              />
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={this.handleChange}
                required
              />
              <label>
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={this.handleChange}
                required
              />
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={this.handleChange}
                required
              />
              <button type="submit" className="btn" onClick={this.handleSubmit}>
                Signup
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }
}
export default connect()(Signup);
