import React from "react";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs";
import Career from "./Career";

class MiddleContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    const page = this.props.page;
    if (page !== "/home" && page !== "/") this.props.history.push(page);
  }
  render() {
    return (
      <div className="middle-container">
        <Welcome />
        <AboutUs changePage={this.props.changePage} />
        <Career changePage={this.props.changePage} />
      </div>
    );
  }
}

export default MiddleContainer;
