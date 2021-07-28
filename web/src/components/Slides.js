import React from "react";
import Carousel from "react-bootstrap/Carousel";

class Slides extends React.Component {
  render() {
    return (
      <Carousel className="slides">
        <Carousel.Item className="item" interval={4000}>
          <img src="images/slides/slide1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="item" interval={4000}>
          <img src="images/slides/slide2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="item" interval={4000}>
          <img src="images/slides/slide3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slides;
