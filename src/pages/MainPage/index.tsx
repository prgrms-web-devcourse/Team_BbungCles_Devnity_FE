import { useEffect } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarBgColorState } from "../../atoms/topbarBgColor";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import MainContainer from "../../components/Main/MainContainer";

const MainPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const resetTopbarBgColor = useResetRecoilState(topbarBgColorState);

  useEffect(() => {
    setShowSidebar(true);
    setShowTopbar(true);
    resetTopbarBgColor();
  }, [isShowSidebar, setShowSidebar, setShowTopbar, resetTopbarBgColor]);

  return <MainContainer />;
};

export default MainPage;
