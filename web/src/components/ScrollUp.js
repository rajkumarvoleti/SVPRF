import React from "react";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here

class ScrollUp extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton className="scroll" />
      </div>
    );
  }
}

export default ScrollUp;
