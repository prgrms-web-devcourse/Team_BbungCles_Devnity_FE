import { useResetRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarBgColorState } from "../../atoms/topbarBgColor";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import MyProfileContainer from "../../components/MyProfile/MyProfileContainer";

const MyProfilePage = () => {
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);
  const resetTopbarBgColor = useResetRecoilState(topbarBgColorState);

  setShowTopbar(true);
  setShowSidebar(true);
  resetTopbarBgColor();

  return <MyProfileContainer />;
};

export default MyProfilePage;
