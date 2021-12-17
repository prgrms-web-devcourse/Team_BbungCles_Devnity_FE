import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import SignupContainer from "../../components/Signup/SignupContainer";

const index = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);

  useEffect(() => {
    setShowSidebar(false);
    setShowTopbar(false);
  }, [isShowSidebar, setShowSidebar, setShowTopbar]);

  return <SignupContainer />;
};

export default index;
