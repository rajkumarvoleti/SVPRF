import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from "./AboutUsPage";
import Careerpage from "./Careerpage";
import MiddleCOntainer from "./MiddleContainer";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MiddleCOntainer} />
      <Route exact path="/AboutUs" component={AboutUsPage} />
      <Route exact path="/Career" component={Careerpage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
