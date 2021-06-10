import React from "react";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";
import Router from "./Router1";
class AppSub extends React.Component {
  state = {
    styles: {
      home_style: "flex",
      about_style: "flex",
      services_style: "flex",
      career_style: "flex",
      contact_style: "flex",
    },
  };
  changePage = (str) => {
    this.props.history.push(`/${str}`);
  };
  changeNav = (str) => {
    var styles = { ...this.state.styles };
    console.log("ok working");
    console.log(str);
    if (str === "AboutUs") {
      styles.home_style = "flex";
      styles.about_style = "flex";
      styles.services_style = "none";
      styles.career_style = "none";
      styles.contact_style = "flex";
      this.setState({ styles });
    } else if (str === "Career") {
      styles.home_style = "flex";
      styles.about_style = "none";
      styles.services_style = "none";
      styles.career_style = "flex";
      styles.contact_style = "flex";
      this.setState({ styles });
    } else {
      styles.home_style = "flex";
      styles.about_style = "flex";
      styles.services_style = "flex";
      styles.career_style = "flex";
      styles.contact_style = "flex";
      this.setState({ styles });
    }
    // optionsSelected[name] = { ...obj };
    // this.setState({ optionsSelected });
  };
  render() {
    return (
      <div className="main">
        <TopContainer
          changeNav={this.changeNav}
          styles={this.state.styles}
          changePage={this.changePage}
        />
        <Router changeNav={this.changeNav} />
        <BottomContainer />
      </div>
    );
  }
}

export default AppSub;
