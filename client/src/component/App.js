import React, { Component } from "react";
import Hero from "./Hero";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Eventform from "./Eventfome";
import Herocontainer from "./Herocontainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {localStorage.authToken ? (
          <switch>
            <Route exact path="/dashboard" component={Herocontainer}></Route>
            <Route exact path="/event" component={Eventform}></Route>
          </switch>
        ) : (
          <switch>
            <Route exact path="/" component={Hero}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
          </switch>
        )}

        {/* <Switch>
          <Route exact path="/" component={Hero}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/dashboard" component={Herocontainer}></Route>
          <Route exact path="/event" component={Eventform}></Route>
        </Switch> */}
      </div>
    );
  }
}

export default App;
