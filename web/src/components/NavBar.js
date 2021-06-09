import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="Navbar" expand="lg">
        <Navbar.Brand className="Brand" href="#home">
          <img src="images/logo-crop.png" alt="logo" />
          <h1>SPVPRF</h1>
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collpase" id="basic-navbar-nav">
          <Nav className="links mr-auto">
            <Nav.Link className="link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
