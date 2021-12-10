import { ReactChild } from "react";
import { ColorType, ShadowType } from "../../../assets/theme";
import { StyledButton } from "./styles";

export interface Props {
  name?: string;
  type?: "button" | "reset" | "submit";
  children?: ReactChild;
  text?: string;
  onClick?: (event: React.MouseEvent) => void;
  color?: ColorType;
  backgroundColor?: ColorType;
  boxShadow?: ShadowType;
  size?: "sm" | "md" | "lg";
}

const Button = ({
  name = "",
  type = "button",
  children,
  text = "",
  onClick,
  color,
  backgroundColor,
  boxShadow,
  size,
}: Props) => {
  return (
    <StyledButton
      type={type}
      aria-label={name}
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      size={size}
    >
      {children ?? text}
    </StyledButton>
  );
};

export default Button;
