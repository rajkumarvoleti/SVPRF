import React from "react";
import NavBar from "./NavBar";
import Slides from "./Slides";
import BigHead from "./BigHead";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Career from "./Career";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="top-container">
          <BigHead />
          <NavBar />
          <Slides />
        </div>
        <div className="middle-container">
          <Welcome />
          <ScrollUp />
          <AboutUs />
          <Services />
          <Career />
        </div>
        <div className="bottom-container">
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
