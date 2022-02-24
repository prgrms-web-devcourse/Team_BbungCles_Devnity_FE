import { useEffect } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarBgColorState } from "../../atoms/topbarBgColor";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import MyProfileContainer from "../../components/MyProfile/MyProfileContainer";

const MyProfilePage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const resetTopbarBgColor = useResetRecoilState(topbarBgColorState);

  useEffect(() => {
    setShowSidebar(true);
    setShowTopbar(true);
    resetTopbarBgColor();
  }, [isShowSidebar, resetTopbarBgColor, setShowSidebar, setShowTopbar]);

  return <MyProfileContainer />;
};

export default MyProfilePage;
