import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import theme from "../../assets/theme";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarBgColorState } from "../../atoms/topbarBgColor";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import MainContainer from "../../components/Main/MainContainer";

const MainPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const setTopbarBgColor = useSetRecoilState(topbarBgColorState);

  useEffect(() => {
    setShowSidebar(true);
    setShowTopbar(true);
    setTopbarBgColor(theme.colors.gray200);
  }, [isShowSidebar, setShowSidebar, setShowTopbar, setTopbarBgColor]);

  return <MainContainer />;
};

export default MainPage;
