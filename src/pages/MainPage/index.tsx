import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import MainContainer from "../../components/Main/MainContainer";

const MainPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);

  useEffect(() => {
    setShowSidebar(true);
    setShowTopbar(true);
  }, [isShowSidebar, setShowSidebar, setShowTopbar]);

  return <MainContainer />;
};

export default MainPage;
