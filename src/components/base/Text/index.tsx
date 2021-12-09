<<<<<<< HEAD
import { ReactChild } from "react";

interface Style {
  [key: string]: string;
}

interface Props {
  children: ReactChild;
  size?: number | string;
  underline?: boolean;
  block?: boolean;
  paragraph?: boolean;
  delete?: boolean;
  code?: boolean;
  mark?: boolean;
  strong?: boolean;
  color?: string;
  ellipsisLineClamp?: number;
  style?: Style;
}

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  ellipsisLineClamp,
  mark,
  code,
  ...props
}: Props) => {
  const Tag = block ? "div" : paragraph ? "p" : "span";
  const fontStyle = {
    fontWeight: strong ? 700 : undefined,
    fontSize: typeof size === "number" ? size : undefined,
    textDecoration: underline ? "underline" : undefined,
    color,
  };
  const EllipsisStyle =
    ellipsisLineClamp &&
    ({
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: ellipsisLineClamp,
      lineClamp: ellipsisLineClamp,
      WebkitBoxOrient: "vertical",
      whiteSpace: "normal",
      overflowWrap: "break-word",
    } as const);

  return (
    <Tag
      className={typeof size === "string" ? `Text--size-${size}` : undefined}
      style={{ ...props.style, ...fontStyle, ...EllipsisStyle }}
    >
      {mark ? (
        <mark>{children}</mark>
      ) : code ? (
        <code>{children}</code>
      ) : del ? (
        <del>{children}</del>
      ) : (
        children
      )}
    </Tag>
=======
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
>>>>>>> 8cd3358 (DVT-#17 스타일 변경)
  );
};

export default Text;
