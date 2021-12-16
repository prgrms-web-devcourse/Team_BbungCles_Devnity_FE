import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import UsersMapContainer from "../../components/UsersMap/UsersMapContainer";

const UserMapPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);

  useEffect(() => {
    setShowSidebar(true);
  }, [isShowSidebar, setShowSidebar]);

  return <UsersMapContainer />;
};

export default UserMapPage;
