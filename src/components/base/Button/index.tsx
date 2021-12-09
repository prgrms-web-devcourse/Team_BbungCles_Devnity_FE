import { ReactChild } from "react";
import { StyledButton } from "./styles";

interface Props {
  name?: string;
  children?: ReactChild;
  text?: string;
  onClick: (event: React.MouseEvent) => void;
}

const Button = ({ name = "", children, text = "", onClick }: Props) => {
  return (
    <StyledButton type="button" aria-label={name} onClick={onClick}>
      {children ?? text}
    </StyledButton>
  );
};

export default Button;
