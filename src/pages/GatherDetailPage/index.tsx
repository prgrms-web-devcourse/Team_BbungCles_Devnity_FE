import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import GatherDetailContainer from "../../components/GatherDetail/GatherDetailContainer";

const GatherDetailPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);

  useEffect(() => {
    setShowSidebar(true);
  }, [isShowSidebar, setShowSidebar]);

  return <GatherDetailContainer />;
};

export default GatherDetailPage;
