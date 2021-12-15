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
      style={{ ...fontStyle, ...EllipsisStyle, ...props.style }}
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
  );
};

export default Text;
