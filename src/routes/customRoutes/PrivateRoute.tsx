import { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { login } from "../../constants";
import { getLocalStorageItem } from "../../utils/functions";

interface IProps {
  path: string;
  fallbackPath: string;
  exact: boolean;
  component: ComponentType;
}

// TODO: prop spread 문법 관련된 lint는 off 해도 될지 팀원들과 상의 (Prop spreading is forbiddeneslintreact/jsx-props-no-spreading)
/* eslint-disable */
const PrivateRoute = ({
  component: Component,
  fallbackPath,
  ...rest
}: IProps) => {
  const isLogin = getLocalStorageItem(login.localStorageKey.TOKEN, null);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to={fallbackPath} />
      }
    />
  );
};

export default PrivateRoute;
