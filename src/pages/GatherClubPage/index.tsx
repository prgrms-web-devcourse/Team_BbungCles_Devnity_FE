import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import GatherMainContainer from "../../components/GatherMain/GatherMainContainer";

const GatherClubPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);

  useEffect(() => {
    setShowSidebar(true);
  }, [isShowSidebar, setShowSidebar]);

  return <GatherMainContainer selectedCategory="CLUB" />;
};

export default GatherClubPage;
