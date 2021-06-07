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
              a volunteer/associate, your responsibilities will include:
            </p>
            <p>
              Assisting the seniors with all the logistical work, background
              research on relevant topics,handling communications with
              specialists, MPs/MLAs, and partner organizations for the upcoming
              domestic roundtable programs, budget session of the parliament and
              academic programs etc...
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
