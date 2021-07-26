import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_top">
        <div className="footer">
          <div className="rights">
            <p>©2021 Sri Padha Vallabha Political Research Forum</p>
            <p> All rights reserved</p>
          </div>
          <div className="icons" id="icons">
            <a
              href="https://www.facebook.com/Sri-Padha-Vallabha-Research-Organisation-106543954948080/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCG_3Vd0SxI_8N3YJKkmFzSw"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-youtube fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/spvprf/"
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
