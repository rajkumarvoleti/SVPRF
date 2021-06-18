import React from "react";
import DirectorsMsg from "./DirectorsMsg";
class AboutUsPage extends React.Component {
  state = {
    who: true,
    what: false,
    goals: false,
    director: false,
  };
  whoRef = React.createRef();
  whatRef = React.createRef();
  goalsRef = React.createRef();
  componentDidMount() {
    window.scrollTo(0, window.innerHeight - 100);
  }
  componentDidUpdate() {
    const page = this.props.page;
    if (page !== "/about") this.props.history.push(page);
  }
  handleClick = (str) => {
    if (str === "who") {
      this.setState({
        who: true,
        what: false,
        goals: false,
      });
    } else if (str === "what") {
      this.setState({
        who: false,
        what: true,
        goals: false,
      });
    } else {
      this.setState({
        who: false,
        what: false,
        goals: true,
      });
    }
  };
  render() {
    return (
      <div className="AboutUsPageMain" id="AboutPage">
        <div className="AboutUsPage ">
          <div className="intro">
            <h2>About Us</h2>
            <div className="content">
              <p>
                One of the SPVPRF’s strength is embedded in their efficient
                group of individuals coming from dynamic backgrounds all
                clustered together under a common aim of improving the policy
                outcomes of the nation.
              </p>
              <p>
                SPVPRF is one of India's leading political consulting firms. In
                today's world, accurate analysis is just as important as the
                data gathered through that analysis. A powerful methodology
                emerges from the combination of these two, which assesses the
                current situation and aids decision-making by optimizing
                available resources for the best possible returns. We, a SPVPRF,
                are in the business of collecting and analyzing useful and
                reliable data in order to produce political insights. We use
                cutting-edge and creative methods to accomplish this. Currently,
                we are utilizing both our staff's expertise and technology to
                assist elected officials in managing their constituents in an
                organized manner.
              </p>
            </div>
          </div>
          <DirectorsMsg
            onEnterViewport={() => {
              this.setState({ director: true });
            }}
            inView={this.state.director}
          />
          <div className="what">
            <h2>What We Are</h2>
            <div className="content">
              <p>
                SPVPRF is a leader in the field of election studies. Our core
                values of "integrity and loyalty" to our clients are something
                we believe in and are proud of. We have been in the political
                consulting business for a few years and have successfully
                assisted our clients in achieving their objectives, winning
                elections, meeting public expectations, and rising to the top.
                We help them assess current trends and shape the image of the
                leader or candidate, as well as the party's position, using
                scientific methods. We assess political trends using the most
                up-to-date methods, provide the best platform for developing a
                brand leadership image, and equip them with the technology to
                maintain it.
              </p>
            </div>
          </div>
          <div className="cards none">
            <div className="headings">
              <div
                className={this.state.who ? "big" : "small"}
                onClick={() => {
                  this.handleClick("who");
                }}
              >
                <h3>WHO WE ARE</h3>
              </div>
              <div
                onClick={() => {
                  this.handleClick("what");
                }}
                className={this.state.what ? "big" : "small"}
              >
                <h3>WHAT WE ARE</h3>
              </div>

              <div
                className={this.state.goals ? "big" : "small"}
                onClick={() => {
                  this.handleClick("goals");
                }}
              >
                <h3>OUR MISSION</h3>
              </div>
            </div>
            <div className="matter">
              <div className="card">
                <div
                  className={
                    this.state.who ? "content animate__slideInLeft" : "none"
                  }
                  ref={this.whoRef}
                >
                  <p>
                    Our management team is made up of graduates from prestigious
                    educational institutions like IIT, IIM, NIT, and
                    universities. Engineers and MCAs from prestigious
                    institutions lead the IT and database management department.
                    Graduates from top institutes of mass communication and
                    political science work as surveyors and data collectors, and
                    experienced social sciences post-graduates oversee the
                    political, social, and economic research division.
                  </p>
                </div>
              </div>
              <div className="card">
                <div
                  className={
                    this.state.what ? "content animate__slideInLeft" : "none"
                  }
                  ref={this.whatRef}
                >
                  <p>
                    SPVPRF is a leader in the field of election studies. Our
                    core values of "integrity and loyalty" to our clients are
                    something we believe in and are proud of. We have been in
                    the political consulting business for a few years and have
                    successfully assisted our clients in achieving their
                    objectives, winning elections, meeting public expectations,
                    and rising to the top. We help them assess current trends
                    and shape the image of the leader or candidate, as well as
                    the party's position, using scientific methods. We assess
                    political trends using the most up-to-date methods, provide
                    the best platform for developing a brand leadership image,
                    and equip them with the technology to maintain it.
                  </p>
                </div>
              </div>
              <div className="card">
                <div
                  className={
                    this.state.goals ? "content animate__slideInLeft" : "none"
                  }
                  ref={this.goalsRef}
                >
                  <p>
                    Our goal is to provide our customers with hassle-free
                    services. Using a comprehensive management framework, we
                    provide a wide, all-encompassing overview of compiled data
                    to streamline the process of tabulating records
                  </p>
                  <p>
                    A effective election campaign relies heavily on polling and
                    scientific studies. This aids in reliably reflecting on the
                    various aspects of the election. Candidates may use research
                    to better understand the political climate in their
                    districts and make decisions based on that information. ...
                    argues that instead of conducting business behind closed
                    doors, it should reach out to voters at the grassroots level
                    to gather information.
                  </p>
                  <p>
                    Before the election campaign begins, we at our political
                    polling firm carry you the advantages of thorough analysis.
                    One of the most important aspects of the campaigning process
                    is political polling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsPage;
