import React from "react";

const source = [
  "survey.webp",
  "cavassing.webp",
  "war_room.png",
  "campaign.png",
  "polls.webp",
  "exit_polls.png",
  "software.png",
  "social.webp",
  "digital.png",
  "booth.webp",
  "skill.webp",
  "employment.webp",
  "vadvartisement.png",
  "marketing.webp",
  "strategy.webp",
  "survey2.png",
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
  "DIGITAL MEDIA CAMPAIGN",
  "COMPREHENSIVE RESEARCH AT BOOTH LEVEL",
  "Skill Development",
  "Employment Guidance",
  "POLITICAL ADVERTISING",
  "Inbound and outbound Election Marketing",
  "Political Campaign Consultants for Strategic Canvassing & More",
  "ELECTION SURVEY AGENCY",
];

const icons = [];
for (let i = 0; i < content.length; i++) {
  icons.push(
    <div className="icon">
      <img src={`images/${source[i]}`} alt={source[i]} />
      <p>{content[i]}</p>
    </div>
  );
}

class Services extends React.Component {
  render() {
    return (
      <div className="services">
        <div className="head">
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut
            placeat possimus natus dolorum autem maiores beatae consectetur,
            veniam tempore aperiam nisi omnis ipsum voluptas, doloribus nam
            voluptates tenetur nulla.
          </p>
        </div>
        <div className="icons">{icons}</div>
      </div>
    );
  }
}

export default Services;
