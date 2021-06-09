import React from "react";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Career from "./Career";

class MiddleContainer extends React.Component {
  changePage = (str) => {
    this.props.history.push(`/${str}`);
  };
  render() {
    return (
      <div className="middle-container">
        <Welcome />
        <AboutUs changePage={this.changePage} />
        <Services />
        <Career changePage={this.changePage} />
      </div>
    );
  }
}

export default MiddleContainer;
