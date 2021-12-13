import { ReactChild, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { globalMyProfile } from "../atoms";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import { routes } from "../constants";
import { requestGetMyProfile } from "../utils/apis";
import { PageWrapper, Container } from "./styles";

interface Props {
  children: ReactChild;
}

const DefaultTemplate = ({ children }: Props) => {
  // TODO: 페이지에 따라 사이드바를 보여줘야 하는지에 대한 여부를 팀원들과 논의하여 확정한 후에 하드코딩된 값을 제거하고 로직으로 변경한다.
  const isShowSidebar = true;
  const { pathname } = useLocation();
  const [, setGlobalMyProfile] = useRecoilState(globalMyProfile);

  const getMyProfile = useCallback(async () => {
    const { data } = await requestGetMyProfile();

    setGlobalMyProfile((prev) => ({
      ...prev,
      introduction: { ...data.data.introduction },
      user: { ...data.data.user },
    }));
  }, [setGlobalMyProfile]);

  useEffect(() => {
    if (pathname !== routes.LOGIN) {
      getMyProfile();
    }

    // pathname를 deps에 넣게되면 pathname이 바뀔 때 마다 호출됨. 사용자가 링크를 입력해서 들어올 경우 한번만 실행하기 위해 deps에 pathname를 뺌
    // eslint-disable-next-line
  }, [getMyProfile]);

  return (
    <Container>
      {isShowSidebar && <SidebarContainer />}
      <PageWrapper>{children}</PageWrapper>
    </Container>
  );
};

export default DefaultTemplate;
