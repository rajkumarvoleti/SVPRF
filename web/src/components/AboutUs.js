import React from "react";
import Button from "react-bootstrap/Button";

class AboutUs extends React.Component {
  handleClick = () => {
    this.props.changePage("AboutUs");
    window.scrollBy(0, -700);
  };
  render() {
    return (
      <div className="about_us" id="About">
        <div className="about">
          <h2>About</h2>
          <div className="photo"></div>
          <div className="content">
            <p>
              SPRO is one of India's leading political consulting firms. In
              today's world, accurate analysis is just as important as the data
              gathered through that analysis. A powerful methodology emerges
              from the combination of these two, which assesses the current
              situation and aids decision-making by optimizing available
              resources for the best possible returns.
            </p>
            <Button className="btn" onClick={this.handleClick} size="lg">
              Read More
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
