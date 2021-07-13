import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_top">
        <div className="footer">
          <div className="rights">
            <p>©2020 FairDice Technologies Pvt. Ltd</p>
            <p> All rights reserved</p>
          </div>
          <div className="icons" id="icons">
            <a
              href="http://spvro.org/facebook"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a
              href="http://spvro.org/Youtube"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-youtube fa-lg"></i>
            </a>
            <a
              href="http://spvro.org/instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
