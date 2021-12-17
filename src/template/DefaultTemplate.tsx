import { ReactChild, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { globalMyProfile } from "../atoms";
import { sidebarVisibleState } from "../atoms/sidebarVisible";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import { routes } from "../constants";
import useMyProfile from "../hooks/useMyProfile";
import { PageWrapper, Container } from "./styles";

interface Props {
  children: ReactChild;
}

const DefaultTemplate = ({ children }: Props) => {
  // TODO: 페이지에 따라 사이드바를 보여줘야 하는지에 대한 여부를 팀원들과 논의하여 확정한 후에 하드코딩된 값을 제거하고 로직으로 변경한다.
  const isShowSidebar = useRecoilValue(sidebarVisibleState);
  const { pathname } = useLocation();
  const [, setGlobalMyProfile] = useRecoilState(globalMyProfile);
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
      <PageWrapper>{children}</PageWrapper>
    </Container>
  );
};

export default DefaultTemplate;
