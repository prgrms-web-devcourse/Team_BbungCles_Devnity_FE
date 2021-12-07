import styled from "@emotion/styled";

export const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 40px;
  margin: 20px 0;
`;

export const LogoText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  vertical-align: middle;
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
