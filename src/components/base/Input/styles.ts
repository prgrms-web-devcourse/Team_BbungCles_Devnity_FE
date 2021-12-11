import styled from "@emotion/styled";
import { IProps } from "./types";

export const StyledInput = styled.input<IProps>`
  width: 100%;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors?.gray600};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors?.gray300};
  }
`;

export const CustomStyledInput = styled(StyledInput)<IProps>`
  width: ${({ customStyle }) => customStyle.width};
  color: ${({ customStyle, theme }) => theme.colors[customStyle.color]};
  padding: ${({ customStyle }) => customStyle.padding};
  border: ${({ customStyle }) => customStyle.border};
  background-color: ${({ customStyle, theme }) =>
    theme.colors[customStyle.backgroundColor]};
  border-radius: ${({ customStyle }) => customStyle.borderRadius};
  border-top: ${({ customStyle }) => customStyle.borderTop};
  box-shadow: ${({ customStyle, theme }) =>
    theme.boxShadows[customStyle.boxShadow]};

  &:focus {
    outline: ${({ customStyle }) => customStyle.focusOutline};
  }

  &::placeholder {
    color: ${({ customStyle, theme }) =>
      theme.colors[customStyle.placeholderColor]};
  }

  &:disabled {
    background-color: ${({ customStyle, theme }) =>
      theme.colors[customStyle.disabledBackgroundColor]};
  }
`;
