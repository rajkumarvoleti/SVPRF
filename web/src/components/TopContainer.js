import React from "react";
import NavBar from "./NavBar";
import Slides from "./Slides";
import BigHead from "./BigHead";
import ScrollUp from "./ScrollUp";

class TopContainer extends React.Component {
  render() {
    return (
      <div className="top-container">
        <BigHead />
        <NavBar
          styles={this.props.styles}
          changeNav={this.props.changeNav}
          changePage={this.props.changePage}
        />
        <Slides />
        <ScrollUp />
      </div>
    );
  }
}

export default TopContainer;
