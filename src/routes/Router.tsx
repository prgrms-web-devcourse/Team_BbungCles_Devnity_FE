import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/signup" exact component={MainPage} />
      <Route path="/login" exact component={MainPage} />
      <Route path="/admin" exact component={MainPage} />
      <Route path="/myprofile" exact component={MainPage} />
      <Route path="/userlist" exact component={MainPage} />
      <Route path="/userlist/:id" exact component={MainPage} />
      <Route path="/mygatherlist" exact component={MainPage} />
      <Route path="/gatherlist" exact component={MainPage} />
      <Route path="/gatherlist/:id" exact component={MainPage} />
      <Route path="/mapgakcolist" exact component={MainPage} />
      <Route path="/mapgakcolist/:id" exact component={MainPage} />
      <Route path="/usersmap" exact component={MainPage} />
    </Switch>
  );
};

export default Router;
