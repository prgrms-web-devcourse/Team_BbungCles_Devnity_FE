import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import SignupContainer from "../../components/Signup/SignupContainer";

const index = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);

  useEffect(() => {
    setShowSidebar(false);
  }, [isShowSidebar, setShowSidebar]);

  return <SignupContainer />;
};

export default index;
