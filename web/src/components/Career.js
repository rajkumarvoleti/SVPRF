import React from "react";
import Button from "react-bootstrap/Button";

class Career extends React.Component {
  render() {
    return (
      <div className="about_us career">
        <div className="about">
          <h2>Career</h2>
          <div className="photo"></div>
          <div className="content">
            <p>
              We offer internship opportunities to young aspirants who are
              interested in public policy and governance. If you are selected as
              a volunteer/associate, your responsibilities will include
              assisting the seniors,handing communication with
              specalists,web-based research etc...
            </p>
            <Button class="btn" size="lg">
              Read More
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Career;
