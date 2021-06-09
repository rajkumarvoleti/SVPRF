import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

class BottomContainer extends React.Component {
  render() {
    return (
      <div className="bottom-container">
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default BottomContainer;
