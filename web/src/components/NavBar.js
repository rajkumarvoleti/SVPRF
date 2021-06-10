import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };
  scrollUp = (str) => {
    var x = document.querySelector(str);
    console.log(str);
    if (!x) {
      if (str === "#Career") this.scrollUp("#CareerPage");
      else if (str === "#About") this.scrollUp("#AboutPage");
      else {
        this.props.changeNav("str");
        this.goBack();
      }
    } else if (
      str === "#Contact" ||
      str === "#AboutPage" ||
      str === "#CareerPage"
    ) {
      window.scrollTo(0, x.offsetTop - 100);
    } else {
      window.scrollTo(0, x.offsetTop + 450);
    }
  };
  applyStlyes = (str) => {
    const style = this.props.styles[str];
    return style;
  };
  render() {
    var home_style = {
      display: this.applyStlyes("home_style"),
    };
    var about_style = {
      display: this.applyStlyes("about_style"),
    };
    var services_style = {
      display: this.applyStlyes("services_style"),
    };
    var career_style = {
      display: this.applyStlyes("career_style"),
    };
    var contact_style = {
      display: this.applyStlyes("contact_style"),
    };
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
              style={home_style}
              active={false}
              className="link"
              onClick={() => this.scrollUp("#home")}
              href="#"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={about_style}
              active={false}
              href="#"
              onClick={() => this.scrollUp("#About")}
              className="link"
            >
              About
            </Nav.Link>
            <Nav.Link
              style={services_style}
              active={false}
              href="#"
              onClick={() => this.scrollUp("#Services")}
              className="link"
            >
              Services
            </Nav.Link>
            <Nav.Link
              style={career_style}
              active={false}
              href="#"
              onClick={() => this.scrollUp("#Career")}
              className="link"
            >
              Career
            </Nav.Link>
            <Nav.Link
              style={contact_style}
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
