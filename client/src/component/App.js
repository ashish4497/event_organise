import React, { Component } from "react";
import Hero from "./Hero";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import LogedHero from "./LogedHero";
import Eventform from "./Eventfome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Hero}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/dashboard" component={LogedHero}></Route>
          <Route exact path="/event" component={Eventform}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
