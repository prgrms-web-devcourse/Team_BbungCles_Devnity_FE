import { useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import SignupContainer from "../../components/Signup/SignupContainer";

const index = () => {
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);

  setShowSidebar(false);
  setShowTopbar(false);

  return <SignupContainer />;
};

export default index;
