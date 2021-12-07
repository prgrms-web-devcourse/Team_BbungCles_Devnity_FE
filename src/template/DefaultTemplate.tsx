import { ReactChild } from "react";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import { PageWrapper, Wrapper } from "./styles";

interface Props {
  children: ReactChild;
}

const DefaultTemplate = ({ children }: Props) => {
  // TODO: 페이지에 따라 사이드바를 보여줘야 하는지에 대한 여부를 팀원들과 논의하여 확정한 후에 하드코딩된 값을 제거하고 로직으로 변경한다.
  const isShowSidebar = true;

  return (
    <Wrapper>
      {isShowSidebar && <SidebarContainer />}
      <PageWrapper>{children}</PageWrapper>
    </Wrapper>
  );
};

export default DefaultTemplate;
