import React from "react";
import Carousel from "react-bootstrap/Carousel";

class Slides extends React.Component {
  render() {
    return (
      <Carousel fade className="slides">
        <Carousel.Item className="item" interval={2000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/user/erondu/1600x900"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item" interval={2000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item" interval={2000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/collection/190726/1600x900"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slides;
