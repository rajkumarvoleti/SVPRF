import React from "react";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";
import Router from "./router";
class App extends React.Component {
  state = {
    page: "/",
  };
  changePage = (str) => {
    var page = this.state.page;
    page = str;
    this.setState({ page });
  };
  render() {
    return (
      <div className="main">
        <TopContainer changePage={this.changePage} />
        <Router page={this.state.page} changePage={this.changePage} />
        <BottomContainer />
      </div>
    );
  }
}

export default App;
