import React from "react";
import styled from "@emotion/styled";
import theme from "../../../assets/theme";

interface Props {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  style?: React.CSSProperties;
}

const StyledText = styled.span<Props>`
  color: ${(props) => props.color || theme.colors.fontColor};
  font-size: ${(props) => props.fontSize || "14px"};
`;

const Text = ({ children, color, fontSize, style }: Props) => {
  return (
    <StyledText color={color} fontSize={fontSize} style={{ ...style }}>
      {children}
    </StyledText>
  );
};

export default Text;
