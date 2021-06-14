import { BrowserRouter, Route, Switch } from "react-router-dom";
import MiddleContainer from "./MiddleContainer";
import AboutUsPage from "./AboutUsPage";
import CareerPage from "./Careerpage";
import Services from "./Services";
import JoinUs from "./JoinUs";

const Router = (props) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={["/home", "/"]}
        render={(prop) => (
          <MiddleContainer
            page={props.page}
            changePage={props.changePage}
            {...prop}
          />
        )}
      />
      <Route
        exact
        path="/about"
        render={(prop) => <AboutUsPage page={props.page} {...prop} />}
      />
      <Route
        exact
        path="/career"
        render={(prop) => <CareerPage page={props.page} {...prop} />}
      />
      <Route
        exact
        path="/services"
        render={(prop) => <Services page={props.page} {...prop} />}
      />
      <Route
        exact
        path="/join_us"
        render={(prop) => <JoinUs page={props.page} {...prop} />}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
