import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MyProfilePage from "../pages/MyProfilePage";
import GatherDetailPage from "../pages/GatherDetailPage";

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
      <Route path="/gatherlist/:id" exact component={GatherDetailPage} />
      <Route path="/mapgakcolist" exact component={MainPage} />
      <Route path="/mapgakcolist/:id" exact component={MainPage} />
      <Route path="/usersmap" exact component={MainPage} />
      {/*
      TODO: 백엔드와 스크럼에서 Role 사용 관련 이야기가 완료되면 바뀔수도 있음
      지금은 대략적인 사용방법의 예시를 명시했습니다.

      1. PrivateRoute : 로그인을 하지 않았다면 접근 불가 (권한과는 상관없음)
        - fallbackPath은 해당 라우터에 접근할 수 없는 경우 리다이렉트 시킬 path

      2. RestrictRoute : 접근할 수 있는 권한을 개발자가 설정하여 사용 가능
        - allowRoles는 해당 라우터에 접근할 수 있는 권한을 `string[]`의 타입으로 명시하면 됨 e.g.) ["ADMIN", "STUDENT"] -> 어드민과 수강생만 접근 가능
          - RestrictRoute 내부에서 전역상태관리를 통해 현재 로그인한 사용자의 권한을 가져와 체크해야 함
        - fallbackPath은 해당 라우터에 접근할 수 없는 경우 리다이렉트 시킬 path

      <PrivateRoute path="/" fallbackPath="/login" exact component={MainPage} />
      <RestrictRoute
        path="/signup"
        fallbackPath="/"
        allowRoles={["STUDENT"]}
        exact
        component={SignupPage}
      />
      */}
    </Switch>
  );
};

export default Router;
