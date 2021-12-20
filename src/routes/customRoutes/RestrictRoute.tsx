import { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { globalMyProfile } from "../../atoms";
import { login } from "../../constants";
import useCustomToast from "../../hooks/useCustomToast";
import { getLocalStorageItem } from "../../utils/functions";

interface IProps {
  path: string;
  fallbackPath: string;
  allowRoles: string[];
  exact: boolean;
  // TODO: 찾아보기 '{ history: History<unknown>; location: Location<unknown>; match: match<{ [x: string]: string; }>; staticContext?: StaticContext; }' 유형에 'IntrinsicAttributes & { children?: ReactNode; }' 유형과 공통적인 속성이 없습니다.ts(2559)
  // eslint-disable-next-line
  component: ComponentType<any>;
}

/* eslint-disable */
const RestrictRoute = ({
  component: Component,
  fallbackPath,
  allowRoles,
  ...rest
}: IProps) => {
  const [toast] = useCustomToast();

  const isLogin = getLocalStorageItem(login.localStorageKey.TOKEN, null);
  const myProfile = useRecoilValue(globalMyProfile);

  const isAllow = allowRoles.includes(myProfile?.user.role);

  if (!isAllow) {
    toast({ message: "⚠ 권한이 없습니다 ⚠" });
  }

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
