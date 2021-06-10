import React from "react";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Career from "./Career";

class MiddleContainer extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  changePage = (str) => {
    this.props.history.push(`/${str}`);
    window.scrollTo(0, 1200);
    this.props.changeNav(str);
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
