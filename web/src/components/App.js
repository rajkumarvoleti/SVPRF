import React from "react";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";
import Router from "./Router";
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <TopContainer />
        <Router />
        <BottomContainer />
      </div>
    );
  }
}

export default App;
