import styled from "@emotion/styled";

export const SidebarWrapper = styled.nav`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const TextWrapper = styled.div`
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  & ul {
    flex-grow: 1;
    padding: 80px 40px 0;
  }

  & li {
    text-align: right;
    padding: 16px 0px;
    font-size: 24px;

    & a {
      display: block;
    }
  }
`;
