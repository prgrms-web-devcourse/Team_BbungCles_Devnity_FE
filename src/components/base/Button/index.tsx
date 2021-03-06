import { ReactChild } from "react";
import { StyledButton } from "./styles";

interface Props {
  name?: string;
  type?: "button" | "submit" | "reset";
  width?: number | string;
  children?: ReactChild | ReactChild[];
  text?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const Button = ({
  name = "",
  type = "button",
  width = "auto",
  children,
  text = "",
  disabled,
  className,
  onClick,
}: Props) => {
  return (
    <StyledButton
      type={type}
      className={className}
      width={typeof width === "number" ? `${width}px` : width}
      aria-label={name}
      disabled={disabled}
      onClick={onClick}
    >
      {children ?? text}
    </StyledButton>
  );
};

export default Button;
