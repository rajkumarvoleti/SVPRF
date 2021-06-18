import React from "react";
import handleViewport from "react-in-viewport";
class DirectorsMsg extends React.Component {
  state = {
    entered: false,
  };

  render() {
    return (
      <div className="about_us">
        <div className="about">
          <h2>Message from Director</h2>
          <img
            className={
              this.props.inView ? "photo animate__slideInLeft" : "photo"
            }
            src="images/director_c.jpeg"
            alt="director"
          />
          <div className="content">
            <p>
              SPVPRF, which was founded in 2021, has grown to become a major
              research and consulting organization specializing in political
              research, analytics, and campaigning in the areas of an election,
              governance, politics, health, and education. The SPVPRF is a
              leader in the field of election research. We believe in ‘integrity
              and loyalty to our clients at SPVPRV. Our scientific approach to
              data collection at the grassroots level is accomplished through
              interviews, with reliable analysis completed utilizing in-house
              technologies. We provide our clients with the tools and technology
              they need to assess the present situation and make timely
              decisions, as well as assist them in optimizing their existing
              resources to get the best potential returns. I am optimistic that
              the firm will continue to soar to new heights of success for years
              to come with the goal of bringing change.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const DirectorsMsgPort = handleViewport(DirectorsMsg);

export default DirectorsMsgPort;
