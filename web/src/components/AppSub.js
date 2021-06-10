import React from "react";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";
import Router from "./Router1";
class AppSub extends React.Component {
  changePage = (str) => {
    this.props.history.push(`/${str}`);
    console.log(this.props.history);
  };
  render() {
    return (
      <div className="main">
        <TopContainer changePage={this.changePage} />
        <Router />
        <BottomContainer />
      </div>
    );
  }
}

export default AppSub;
