import React from "react";
import Button from "react-bootstrap/Button";

class BigHead extends React.Component {
  state = {
    mounted: false,
  };
  handleClick = () => {
    this.props.changePage("/join_us");
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 2000);
  }
  render() {
    return (
      <div className="headMain">
        <div className="head">
          <h3 className={this.state.mounted ? "animate__slideInLeft" : ""}>
            Sri Padha Vallabha Political Research Forum
          </h3>
          <Button className="btn" onClick={this.handleClick} size="lg">
            Join Us
          </Button>
        </div>
      </div>
    );
  }
}

export default BigHead;
