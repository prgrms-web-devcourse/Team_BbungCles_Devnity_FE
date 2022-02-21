import { useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import UserDetailContainer from "../../components/UserDetail/UserDetailContainer";

const UserDetailPage = () => {
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);

  setShowSidebar(true);

  return <UserDetailContainer />;
};

export default UserDetailPage;
