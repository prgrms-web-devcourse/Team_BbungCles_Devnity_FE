import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import LoginContainer from "../../components/Login/LoginContainer";

const LoginPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);

  useEffect(() => {
    setShowSidebar(false);
  }, [isShowSidebar, setShowSidebar]);

  return <LoginContainer />;
};

export default LoginPage;
