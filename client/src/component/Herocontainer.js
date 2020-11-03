import React, { Component } from "react";
import { connect } from "react-redux";
// import { formInfo } from "../action";
class Herocontainer extends Component {
  render() {
    return (
      // const formInfo = this.props;
      // console.log(formInfo);
      <>
        <div className=" event-cards"></div>;
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Herocontainer);
