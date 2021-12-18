import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./customRoutes";
import { routes } from "../constants";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MyProfilePage from "../pages/MyProfilePage";
import GatherDetailPage from "../pages/GatherDetailPage";
import GatherPage from "../pages/GatherPage";
import GatherClubPage from "../pages/GatherClubPage";
import GatherProjectPage from "../pages/GatherProjectPage";
import GatherStudyPage from "../pages/GatherStudyPage";
import UserListPage from "../pages/UserListPage";
import UserDetailPage from "../pages/UserDetailPage";
import UsersMapPage from "../pages/UsersMapPage";
import MapgakcoMapPage from "../pages/MapgakcoMapPage";
import MyGatherPage from "../pages/MyGatherPage";
import AdminPage from "../pages/AdminPage";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
  return (
    <Switch>
      <PrivateRoute
        path={routes.MAIN}
        fallbackPath={routes.LOGIN}
        exact
        component={MainPage}
      />
      <Route path={`${routes.SIGNUP}/:linkUuid?`} component={SignupPage} />
      <Route path={routes.LOGIN} exact component={LoginPage} />
      <PrivateRoute
        exact
        path={routes.ADMIN}
        fallbackPath={routes.LOGIN}
        component={AdminPage}
      />
      <PrivateRoute
        exact
        path={routes.MYPROFILE}
        fallbackPath={routes.LOGIN}
        component={MyProfilePage}
      />
      <PrivateRoute
        exact
        path={routes.USERLIST}
        fallbackPath={routes.LOGIN}
        component={UserListPage}
      />
      <PrivateRoute
        exact
        path={`${routes.USERLIST}/:userId`}
        fallbackPath={routes.LOGIN}
        component={UserDetailPage}
      />
      <Route path={routes.MYGATHERLIST} exact component={MyGatherPage} />
      <Route path={routes.GATHERLIST} exact component={GatherPage} />
      <Route path={routes.GATHERLIST_STUDY} exact component={GatherStudyPage} />
      <Route path={routes.GATHERLIST_CLUB} exact component={GatherClubPage} />
      <Route
        path={routes.GATHERLIST_PROJECT}
        exact
        component={GatherProjectPage}
      />
      <Route
        path={`${routes.GATHERLIST_ID}/:id`}
        exact
        component={GatherDetailPage}
      />
      <PrivateRoute
        path={routes.MAPGAKCOLIST}
        fallbackPath={routes.LOGIN}
        exact
        component={MapgakcoMapPage}
      />
      <Route path={routes.MAPGAKCOLIST_ID} exact component={MainPage} />
      <PrivateRoute
        path={routes.USERSMAP}
        fallbackPath={routes.LOGIN}
        exact
        component={UsersMapPage}
      />
      <Route path="*" component={NotFoundPage} />

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
