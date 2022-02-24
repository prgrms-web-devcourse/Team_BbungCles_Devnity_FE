import { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarBgColorState } from "../../atoms/topbarBgColor";
import MyGatherContainer from "../../components/MyGather/MyGatherContainer";

const MyGatherPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const resetTopbarBgColor = useResetRecoilState(topbarBgColorState);

  useEffect(() => {
    setShowSidebar(true);
    resetTopbarBgColor();
  }, [isShowSidebar, resetTopbarBgColor, setShowSidebar]);

  return <MyGatherContainer />;
};

export default MyGatherPage;
