import React from "react";

const source = [
  "services/survey.webp",
  "services/cavassing.png",
  "services/war_room.png",
  "services/campaign.png",
  "services/polls.webp",
  "services/exit_polls.png",
  "services/software.png",
  "services/social.webp",
  "services/digital.png",
  "services/booth.webp",
  "services/vadvartisement.png",
  "services/strategy.webp",
];

const content = [
  "Political Survey and Political Research",
  "Political Canvassing",
  "Political War Room Services",
  "Election Campaign Management",
  "The Accuracy of Opinion Polls",
  "Accuracy of Exit Polls",
  "Election management software",
  "Social Media and Election Campaigns",
  "Digital Media Campaign",
  "Comprehensive Research At Booth Level",
  "Political Advertising",
  "Political Campaign Consultants for Strategic Canvassing & More",
];

const icons = [];
for (let i = 0; i < content.length; i++) {
  icons.push(
    <div className="icon animate__pulse" key={i}>
      <img src={`images/${source[i]}`} alt={source[i]} />
      <p>{content[i]}</p>
    </div>
  );
}

class Services extends React.Component {
  componentDidMount() {
    window.scrollTo(0, window.innerHeight - 100);
  }
  componentDidUpdate() {
    const page = this.props.page;
    if (page !== "/services") this.props.history.push(page);
  }
  render() {
    return (
      <div className="servicesMain">
        <div className="services" id="Services">
          <div className="head">
            <h2>Services</h2>
            <div className="content">
              <p>
                Our goal is to provide our customers with hassle-free services.
                Using a comprehensive management framework, we provide a wide,
                all-encompassing overview of compiled data to streamline the
                process of tabulating records
              </p>
              <p>
                A effective election campaign relies heavily on polling and
                scientific studies. This aids in reliably reflecting on the
                various aspects of the election. Candidates may use research to
                better understand the political climate in their districts and
                make decisions based on that information. ... argues that
                instead of conducting business behind closed doors, it should
                reach out to voters at the grassroots level to gather
                information.
              </p>
              <p>
                Before the election campaign begins, we at our political polling
                firm carry you the advantages of thorough analysis. One of the
                most important aspects of the campaigning process is political
                polling.
              </p>
            </div>
          </div>
          <div className="icons">{icons}</div>
        </div>
      </div>
    );
  }
}

export default Services;
