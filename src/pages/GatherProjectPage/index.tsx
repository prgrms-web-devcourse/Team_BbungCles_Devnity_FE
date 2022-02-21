import { useResetRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarBgColorState } from "../../atoms/topbarBgColor";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import GatherMainContainer from "../../components/GatherMain/GatherMainContainer";

const GatherProjectPage = () => {
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);
  const resetTopbarBgColor = useResetRecoilState(topbarBgColorState);

  setShowSidebar(true);
  setShowTopbar(true);
  resetTopbarBgColor();

  return <GatherMainContainer selectedCategory="PROJECT" />;
};

export default GatherProjectPage;
