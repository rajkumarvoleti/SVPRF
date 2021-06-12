import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from "./AboutUsPage";
import Careerpage from "./Careerpage";
import MiddleContainer from "./MiddleContainer";
const Router = (props) => (
  <BrowserRouter changeNav={props.changeNav}>
    <Switch changeNav={props.changeNav}>
      {/* <Route
        exact
        path="/"
        component={MiddleContainer}
        changeNav={props.changeNav}
        // render={(props) => (
        //   <MiddleContainer changeNav={this.props.changeNav} {...props} />)}
      /> */}
      <Route
        changeNav={props.changeNav}
        exact={true}
        path="/"
        render={(prop) => (
          <MiddleContainer changeNav={props.changeNav} {...prop} />
        )}
      />
      <Route
        // onChange={window.scrollTo(0, 0)}
        path="/AboutUs"
        component={AboutUsPage}
      />
      <Route
        // onChange={window.scrollTo(0, 0)}
        path="/Career"
        component={Careerpage}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
