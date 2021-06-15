import React from "react";
import Button from "react-bootstrap/Button";
import handleViewport from "react-in-viewport";

class Career extends React.Component {
  handleClick = (str) => {
    this.props.changePage(str);
  };
  render() {
    return (
      <div className="about_us career" id="Career">
        <div className="about">
          <h2>Career</h2>

          <div className="content">
            <p>
              We offer internship opportunities to young aspirants who are
              interested in public policy and governance. If you are selected as
              a volunteer/associate, your responsibilities will include
              assisting the seniors,handing communication with
              specialists,web-based research etc...
            </p>
            <Button
              className="btn"
              onClick={() => {
                this.handleClick("/career");
              }}
              size="lg"
            >
              Read More
            </Button>
          </div>
          <img
            className={
              this.props.inView ? "photo animate__slideInRight" : "photo"
            }
            src="images/illustrations/career.svg"
            alt="services"
          />
        </div>
      </div>
    );
  }
}
const CareerPort = handleViewport(Career);

export default CareerPort;
