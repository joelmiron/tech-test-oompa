import { Redirect, Switch } from "react-router";
import { Route, Link, BrowserRouter } from "react-router-dom";
import MainView from 'components/MainView/MainView';
import TopBar from 'components/Navigation/TopBar'

const Navigation = () => {
  return (
  <>   
  <TopBar/>
        <Link to="/"></Link>
        <Link to="/detail"></Link>

        <Switch>
          <Route exact path="/">     <MainView/></Route>
          <Route path="/detail"> </Route>
          <Redirect to="/" />
        </Switch>

   


      </>
   
  );
};

export default Navigation;
