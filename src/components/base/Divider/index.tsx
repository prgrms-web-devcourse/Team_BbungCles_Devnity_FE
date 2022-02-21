import styled from "@emotion/styled";

interface Props {
  type?: "horizontal" | "vertical";
  size?: number;
  color?: string;
}

const Line = styled.hr`
  border: none;
  background-color: #aaa;
  &.vertical {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }
  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }
`;

const Divider = ({ type = "horizontal", size = 8, color }: Props) => {
  const dividerStyle = {
    margin: type === "vertical" ? `0 ${size}px` : `${size}px 0`,
    backgroundColor: color,
  };

  return <Line className={type} style={{ ...dividerStyle }} />;
};

export default Divider;
