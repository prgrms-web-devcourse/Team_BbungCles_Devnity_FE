import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import UsersMapContainer from "../../components/UsersMap/UsersMapContainer";

const UserMapPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);

  useEffect(() => {
    setShowSidebar(true);
    setShowTopbar(false);
  }, [isShowSidebar, setShowSidebar, setShowTopbar]);

  return <UsersMapContainer />;
};

export default UserMapPage;
