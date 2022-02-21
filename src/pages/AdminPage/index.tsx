import { useResetRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarBgColorState } from "../../atoms/topbarBgColor";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import AdminContainer from "../../components/Admin/AdminContainer";

const AdminPage = () => {
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);
  const resetTopbarBgColor = useResetRecoilState(topbarBgColorState);

  setShowSidebar(true);
  setShowTopbar(true);
  resetTopbarBgColor();

  return <AdminContainer />;
};

export default AdminPage;
