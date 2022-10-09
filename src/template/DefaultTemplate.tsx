import { ReactChild, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { globalMyProfile } from "../atoms";
import { sidebarVisibleState } from "../atoms/sidebarVisible";
import { topbarBgColorState } from "../atoms/topbarBgColor";
import { topbarVisibleState } from "../atoms/topbarVisble";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import UserImageAndDropdownContainer from "../components/UserImageAndDropdown/UserImageAndDropdownContainer";
import Text from "../components/base/Text";
import { common, routes } from "../constants";
import useMyProfile from "../hooks/useMyProfile";
import { PageWrapper, Container, Header } from "./styles";
import { authState } from "../atoms/auth";
import useGuestProfile from "../hooks/useGuestProfile";

interface Props {
  children: ReactChild;
}

const DefaultTemplate = ({ children }: Props) => {
  const isShowSidebar = useRecoilValue(sidebarVisibleState);
  const isShowTopbar = useRecoilValue(topbarVisibleState);
  const topbarBgColor = useRecoilValue(topbarBgColorState);
  const auth = useRecoilValue(authState);

  const { pathname } = useLocation();

  const [globalMyProfileData, setGlobalMyProfile] =
    useRecoilState(globalMyProfile);

  const { data } =
    auth === "GUEST" ? useGuestProfile() : useMyProfile(pathname);

  // setGlobalMyProfile((prev) => ({
  //   ...prev,
  //   introduction: { ...data.introduction },
  //   user: { ...data.user },
  // }));

  // useEffect(() => {
  //   if (data !== undefined && pathname !== routes.LOGIN) {
  //     setGlobalMyProfile((prev) => ({
  //       ...prev,
  //       introduction: { ...data.introduction },
  //       user: { ...data.user },
  //     }));
  //   }
  // }, [data, setGlobalMyProfile, pathname]);

  return (
    <Container>
      {isShowSidebar && <SidebarContainer />}
      <PageWrapper>
        {isShowTopbar && (
          <Header topbarBgColor={topbarBgColor}>
            <Text strong size={15}>
              {globalMyProfileData?.user?.name}
            </Text>
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
