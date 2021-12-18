import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import MyProfileContainer from "../../components/MyProfile/MyProfileContainer";

const MyProfilePage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);

  useEffect(() => {
    setShowSidebar(true);
    setShowTopbar(true);
  }, [isShowSidebar, setShowSidebar, setShowTopbar]);

  return <MyProfileContainer />;
};

export default MyProfilePage;
