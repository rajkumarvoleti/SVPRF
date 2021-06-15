import React from "react";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs";
import Career from "./Career";

class MiddleContainer extends React.Component {
  state = {
    about: false,
    career: false,
  };
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
        <AboutUs
          changePage={this.props.changePage}
          onEnterViewport={() => {
            this.setState({ about: true });
          }}
          onExitViewPort={() => {
            this.setState({ about: false });
          }}
          inView={this.state.about}
        />
        <Career
          changePage={this.props.changePage}
          onEnterViewport={() => {
            this.setState({ career: true });
          }}
          onExitViewPort={() => {
            this.setState({ career: false });
          }}
          inView={this.state.career}
        />
      </div>
    );
  }
}

export default MiddleContainer;
