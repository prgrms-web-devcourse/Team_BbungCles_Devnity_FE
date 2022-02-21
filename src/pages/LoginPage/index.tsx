import { useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import LoginContainer from "../../components/Login/LoginContainer";

const LoginPage = () => {
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);

  setShowSidebar(false);
  setShowTopbar(false);

  return <LoginContainer />;
};

export default LoginPage;
