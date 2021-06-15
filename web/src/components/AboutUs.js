import React from "react";
import Button from "react-bootstrap/Button";
import handleViewport from "react-in-viewport";
class AboutUs extends React.Component {
  state = {
    entered: false,
  };
  handleClick = (str) => {
    this.props.changePage(str);
  };

  render() {
    return (
      <div className="about_us" id="About">
        <div className="about">
          <h2>About</h2>
          <img
            className={
              this.props.inView ? "photo animate__slideInLeft" : "photo"
            }
            src="images/illustrations/about.svg"
            alt="about"
          />
          <div className="content">
            <p>
              SPVPRF is one of India's leading political consulting firms. In
              today's world, accurate analysis is just as important as the data
              gathered through that analysis. A powerful methodology emerges
              from the combination of these two, which assesses the current
              situation and aids decision-making by optimizing available
              resources for the best possible returns.
            </p>
            <Button
              onClick={() => {
                this.handleClick("/about");
              }}
              className="btn"
              size="lg"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const AboutUsPort = handleViewport(AboutUs);

export default AboutUsPort;
