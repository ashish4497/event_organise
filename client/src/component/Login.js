import React from "react";
import { login } from "../action";
import { connect } from "react-redux";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props, "check the pros");
    this.props.dispatch(login(this.state));
    // const userToken = this.props.user.token;
    console.log(this.props.history, "check the history");
    if (this.props.user.token) {
      this.props.history.push("/dashboard");
    } else {
      alert("Try again !!");
    }
  };
  render() {
    return (
      <>
        <section className="login_form container padding">
          <div className="form">
            <form>
              <label for="username">
                <b>username</b>
              </label>
              <input
                type="text"
                placeholder="Enter UseName"
                name="username"
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
                Login
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Login);
