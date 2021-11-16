import { Redirect, Switch } from "react-router";
import { Route, Link, Router, BrowserRouter } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/"></Link>
        <Link to="/detail"></Link>

        <Switch>
          <Route exact path="/">
            home
          </Route>
          <Route path="/detail">detail</Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
