import { useResetRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarBgColorState } from "../../atoms/topbarBgColor";
import MyGatherContainer from "../../components/MyGather/MyGatherContainer";

const MyGatherPage = () => {
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);
  const resetTopbarBgColor = useResetRecoilState(topbarBgColorState);

  setShowSidebar(true);
  resetTopbarBgColor();

  return <MyGatherContainer />;
};

export default MyGatherPage;
