import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 16px;
`;

export const ImageWrapper = styled.div<{ isHovered }>`
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray400};

  &::after {
    position: absolute;
    top: calc(50% - 3px);
    margin-left: 4px;
    content: "";
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.gray800};

    ${({ isHovered }) => isHovered && `transform: rotate(180deg)`};

    transition: 0.4s ease-in-out;
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 44px;
  right: 0;
  z-index: 9;
`;
