import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const PageWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header<{ topbarBgColor }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  background-color: ${({ topbarBgColor }) => topbarBgColor};
`;
