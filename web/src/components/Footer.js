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
            <a href="icons">
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a href="#icons">
              <i className="fa fa-envelope fa-lg"></i>
            </a>
            <a href="icons">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
