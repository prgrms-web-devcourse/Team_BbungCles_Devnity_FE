import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray400};
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 44px;
  right: 0;
  z-index: 9;
`;
