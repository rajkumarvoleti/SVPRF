import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppSub from "./AppSub";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={AppSub} />
      <Route component={AppSub} />
    </Switch>
  </BrowserRouter>
);

export default Router;
