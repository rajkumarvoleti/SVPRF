import React from "react";

const source = [
  "services/survey.webp",
  "services/cavassing.webp",
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
  "services/survey2.png",
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
  "Election Survey Agency",
];

const icons = [];
for (let i = 0; i < content.length; i++) {
  icons.push(
    <div className="icon" key={i}>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut
              placeat possimus natus dolorum autem maiores beatae consectetur,
              veniam tempore aperiam nisi omnis ipsum voluptas, doloribus nam
              voluptates tenetur nulla.
            </p>
          </div>
          <div className="icons">{icons}</div>
        </div>
      </div>
    );
  }
}

export default Services;
