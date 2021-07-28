import React from "react";
import Carousel from "react-bootstrap/Carousel";

class Slides2 extends React.Component {
  render() {
    return (
      <Carousel className="slides slides2">
        <Carousel.Item className="item" interval={4000}>
          <img src="images/election1.jpeg" alt="First slide" />
          <Carousel.Caption className="caption">
            Election Campaign
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item" interval={4000}>
          <img src="images/election2.jpeg" alt="Second slide" />
          <Carousel.Caption className="caption">
            Election Campaign
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item" interval={4000}>
          <img src="images/yaash1.jpeg" alt="Second slide" />
          <Carousel.Caption className="caption">
            Flood Relief Campaign
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item" interval={4000}>
          <img src="images/yaash2.jpeg" alt="Second slide" />
          <Carousel.Caption className="caption">
            Flood Relief Campaign
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item" interval={4000}>
          <img src="images/yaash3.jpeg" alt="Second slide" />
          <Carousel.Caption className="caption">
            Flood Relief Campaign
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slides2;
