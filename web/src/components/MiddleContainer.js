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
        <div className="who">
          <h2>Who We Are</h2>
          <div className="content">
            <p>
              Our management team is made up of graduates from prestigious
              educational institutions like IIT, IIM, NIT, and universities.
              Engineers and MCAs from prestigious institutions lead the IT and
              database management department. Graduates from top institutes of
              mass communication and political science work as surveyors and
              data collectors, and experienced social sciences post-graduates
              oversee the political, social, and economic research division.
            </p>
          </div>
        </div>
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
