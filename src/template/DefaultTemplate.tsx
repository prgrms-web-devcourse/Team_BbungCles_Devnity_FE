import { ReactChild, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { globalMyProfile } from "../atoms";
import { sidebarVisibleState } from "../atoms/sidebarVisible";
import { topbarBgColorState } from "../atoms/topbarBgColor";
import { topbarVisibleState } from "../atoms/topbarVisble";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import UserImageAndDropdownContainer from "../components/UserImageAndDropdown/UserImageAndDropdownContainer";
import { common, routes } from "../constants";
import useMyProfile from "../hooks/useMyProfile";
import { PageWrapper, Container, Header } from "./styles";

interface Props {
  children: ReactChild;
}

const DefaultTemplate = ({ children }: Props) => {
  const isShowSidebar = useRecoilValue(sidebarVisibleState);
  const isShowTopbar = useRecoilValue(topbarVisibleState);
  const topbarBgColor = useRecoilValue(topbarBgColorState);

  const { pathname } = useLocation();

  const [globalMyProfileData, setGlobalMyProfile] =
    useRecoilState(globalMyProfile);
  const { data } = useMyProfile(pathname);

  useEffect(() => {
    if (data !== undefined && pathname !== routes.LOGIN) {
      setGlobalMyProfile((prev) => ({
        ...prev,
        introduction: { ...data.introduction },
        user: { ...data.user },
      }));
    }
  }, [data, setGlobalMyProfile, pathname]);

  return (
    <Container>
      {isShowSidebar && <SidebarContainer />}
      <PageWrapper>
        {isShowTopbar && (
          <Header topbarBgColor={topbarBgColor}>
            <UserImageAndDropdownContainer
              imageUrl={
                globalMyProfileData?.introduction.profileImgUrl ||
                common.placeHolderImageSrc
              }
            />
          </Header>
        )}
        {children}
      </PageWrapper>
    </Container>
  );
};

export default DefaultTemplate;
