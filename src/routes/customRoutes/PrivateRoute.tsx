import { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../atoms/auth";

interface IProps {
  path: string;
  fallbackPath: string;
  exact: boolean;
  // TODO: 찾아보기 '{ history: History<unknown>; location: Location<unknown>; match: match<{ [x: string]: string; }>; staticContext?: StaticContext; }' 유형에 'IntrinsicAttributes & { children?: ReactNode; }' 유형과 공통적인 속성이 없습니다.ts(2559)
  // eslint-disable-next-line
  component: ComponentType<any>;
}

// TODO: prop spread 문법 관련된 lint는 off 해도 될지 팀원들과 상의 (Prop spreading is forbiddeneslintreact/jsx-props-no-spreading)
/* eslint-disable */
const PrivateRoute = ({
  component: Component,
  fallbackPath,
  ...rest
}: IProps) => {
  const auth = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth || auth === "GUEST" ? (
          <Component {...props} />
        ) : (
          <Redirect to={fallbackPath} />
        )
      }
    />
  );
};

export default PrivateRoute;
