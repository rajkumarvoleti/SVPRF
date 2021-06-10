import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";

var stri = "#Contact";
class NavBar extends React.Component {
  componentDidUpdate() {
    var x = document.querySelector(stri);
    console.log(stri);
    console.log(x);
  }

  goBack = () => {
    return new Promise((res, rej) => {
      res(this.props.history.goBack());
    });
  };
  scrollUp = async (str) => {
    stri = str;
    var x = document.querySelector(str);
    if (!x) {
      await this.goBack();
    } else if (str === "#Contact") {
      window.scrollTo(0, x.offsetTop - 100);
    } else {
      window.scrollTo(0, x.offsetTop + 450);
    }
  };
  render() {
    return (
      <Navbar
        fixed="top"
        className="Navbar"
        collapseOnSelect={true}
        expand="lg"
      >
        <Navbar.Brand className="Brand">
          <img src="images/logo-crop.png" alt="logo" />
          <h3>SPVPRF</h3>
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collpase" id="basic-navbar-nav">
          <Nav className="links mr-auto">
            <Nav.Link
              active={false}
              className="link"
              onClick={() => this.scrollUp("#home")}
              href="#"
            >
              Home
            </Nav.Link>
            <Nav.Link
              active={false}
              href="#"
              onClick={() => this.scrollUp("#About")}
              className="link"
            >
              About
            </Nav.Link>
            <Nav.Link
              active={false}
              href="#"
              onClick={() => this.scrollUp("#Services")}
              className="link"
            >
              Services
            </Nav.Link>
            <Nav.Link
              active={false}
              href="#"
              onClick={() => this.scrollUp("#Career")}
              className="link"
            >
              Career
            </Nav.Link>
            <Nav.Link
              active={false}
              href="#"
              onClick={() => this.scrollUp("#Contact")}
              className="link"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
