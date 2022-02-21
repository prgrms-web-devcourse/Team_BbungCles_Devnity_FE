import { useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import UsersMapContainer from "../../components/UsersMap/UsersMapContainer";

const UserMapPage = () => {
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);

  setShowSidebar(true);
  setShowTopbar(false);

  return <UsersMapContainer />;
};

export default UserMapPage;
