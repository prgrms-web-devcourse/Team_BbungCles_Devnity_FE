import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MyProfilePage from "../pages/MyProfilePage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/admin" exact component={MainPage} />
      <Route path="/myprofile" exact component={MyProfilePage} />
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
