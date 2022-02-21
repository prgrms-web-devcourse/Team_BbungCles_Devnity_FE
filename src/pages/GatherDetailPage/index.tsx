import { useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import GatherDetailContainer from "../../components/GatherDetail/GatherDetailContainer";

const GatherDetailPage = () => {
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);

  setShowSidebar(true);

  return <GatherDetailContainer />;
};

export default GatherDetailPage;
