import React from "react";
import NavBar from "./NavBar";
import Slides from "./Slides";
import BigHead from "./BigHead";
import ScrollUp from "./ScrollUp";

class TopContainer extends React.Component {
  render() {
    return (
      <div className="top-container">
        <BigHead changePage={this.props.changePage} />
        <NavBar changePage={this.props.changePage} />
        <Slides />
        <ScrollUp />
      </div>
    );
  }
}

export default TopContainer;
