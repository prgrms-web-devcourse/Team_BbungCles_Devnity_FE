import { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { login } from "../../constants";
import { getLocalStorageItem } from "../../utils/functions";

interface IProps {
  path: string;
  fallbackPath: string;
  allowRoles: string[];
  exact: boolean;
  component: ComponentType;
}

// TODO: prop spread 문법 관련된 lint는 off 해도 될지 팀원들과 상의 (Prop spreading is forbiddeneslintreact/jsx-props-no-spreading)
/* eslint-disable */
const RestrictRoute = ({
  component: Component,
  fallbackPath,
  allowRoles,
  ...rest
}: IProps) => {
  const isLogin = getLocalStorageItem(login.localStorageKey.TOKEN, null);
  // TODO: 추후 recoil로 로그인 사용자의 정보를 관리하고 그 정보에서 나의 role만 이곳에서 사용해야 할듯 함
  const myRole = "STUDENT";
  const isAllow = allowRoles.includes(myRole);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && isAllow ? (
          <Component {...props} />
        ) : (
          <Redirect to={fallbackPath} />
        )
      }
    />
  );
};

export default RestrictRoute;
