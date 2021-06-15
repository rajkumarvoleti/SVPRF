import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends React.Component {
  goUp = () => {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollBy(0, -200);
  };
  handleClick = (str) => {
    this.props.changePage(str);
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
          <img src="images/logorm.png" alt="logo" />
          <h3>SPVPRF</h3>
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collpase" id="basic-navbar-nav">
          <Nav className="links mr-auto">
            <Nav.Link
              onClick={() => {
                this.handleClick("/home");
              }}
              className="link"
              href="#"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                this.handleClick("/about");
              }}
              href="#"
              className="link"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                this.handleClick("/services");
              }}
              className="link"
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                this.handleClick("/career");
              }}
              className="link"
            >
              Career
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                this.handleClick("/join_us");
              }}
              className="link"
            >
              Join Us
            </Nav.Link>
            <Nav.Link href="#" onClick={this.goUp} className="link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
