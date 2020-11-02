import React, { Component } from "react";
import { connect } from "react-redux";
class Herocontainer extends Component {
  render() {
    return <div className=" event-cards">

      
    </div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Herocontainer);
