import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import LoginContainer from "../../components/Login/LoginContainer";

const LoginPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);

  useEffect(() => {
    setShowSidebar(false);
    setShowTopbar(false);
  }, [isShowSidebar, setShowSidebar, setShowTopbar]);

  return <LoginContainer />;
};

export default LoginPage;
