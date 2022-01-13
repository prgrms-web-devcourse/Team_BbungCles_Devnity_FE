import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { StyledButton } from "../styles";

export const Guide = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: flex-end;
  user-select: none;
  cursor: not-allowed;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 35px;

    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background: #fff;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlaceSearchFormWrapper = styled.div`
  flex-basis: 300px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const MyPositionButton = styled(StyledButton)``;

export const RegisterButton = styled(StyledButton)<{
  isRegisterEnabled: boolean;
}>`
  ${({ isRegisterEnabled, theme }) =>
    isRegisterEnabled
      ? css`
          color: ${theme.colors.white};
          background-color: ${theme.colors.markerBlue};
          &:hover {
            background-color: ${theme.colors.skyblue};
          }
        `
      : css`
          background-color: ${theme.colors.white};
        `};
`;
