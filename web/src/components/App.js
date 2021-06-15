import React from "react";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";
import Router from "./router";
class App extends React.Component {
  state = {
    page: "/",
    isLoading: true,
  };
  changePage = (str) => {
    var page = this.state.page;
    page = str;
    this.setState({ page });
  };

  componentDidMount() {
    console.log(window.onload);
  }
  handleLoad = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  };
  render() {
    return (
      <div onLoad={this.handleLoad} className="main">
        <div
          className={this.state.isLoading ? "lds-ring" : "lds-ring isLoading"}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <TopContainer changePage={this.changePage} />
        <Router page={this.state.page} changePage={this.changePage} />
        <BottomContainer />
      </div>
    );
  }
}

export default App;
