import React from "react";
import Button from "react-bootstrap/Button";

class BigHead extends React.Component {
  handleClick = () => {
    this.props.changePage("/join_us");
  };
  render() {
    return (
      <div className="headMain">
        <div className="head">
          <h3>Sri Padha Vallabha Political Research Forum</h3>
          <Button className="btn" onClick={this.handleClick} size="lg">
            Join Us
          </Button>
        </div>
      </div>
    );
  }
}

export default BigHead;
