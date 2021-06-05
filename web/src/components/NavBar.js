import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="Navbar">
          <Navbar.Brand className="Brand" href="#home">
            Navbar
          </Navbar.Brand>
          <Nav className="links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
