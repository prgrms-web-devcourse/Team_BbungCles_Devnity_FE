import { ReactChild } from "react";
import { StyledButton } from "./styles";

interface Props {
  name?: string;
  children?: ReactChild | ReactChild[];
  text?: string;
  onClick: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

const Button = ({ name = "", children, text = "", onClick, style }: Props) => {
  return (
    <StyledButton
      type="button"
      aria-label={name}
      onClick={onClick}
      style={style}
    >
      {children ?? text}
    </StyledButton>
  );
};

export default Button;
