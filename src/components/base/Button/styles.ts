import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Props } from ".";

type SizeType = Pick<Props, "size">;

const sizeStyles = (props: SizeType) => css`
  width: 100%;
  ${props.size === "sm" &&
  css`
    height: 36px;
  `}

  ${props.size === "md" &&
  css`
    height: 48px;
  `}

  ${props.size === "lg" &&
  css`
    height: 60px;
  `}

  border-radius: 10px;
`;

export const StyledButton = styled.button<Props>`
  border: 0;
  outline: 0;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor] || theme.colors.transparent};
  box-shadow: ${({ theme, boxShadow }) => theme.boxShadows[boxShadow]};
  ${sizeStyles}
`;
