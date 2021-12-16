import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import UserListContainer from "../../components/UserList/UserListContainer";

const UserListPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);

  useEffect(() => {
    setShowSidebar(true);
  }, [isShowSidebar, setShowSidebar]);

  return <UserListContainer />;
};

export default UserListPage;
