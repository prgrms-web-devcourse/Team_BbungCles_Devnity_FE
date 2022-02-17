import { FocusEvent, FormEvent } from "react";
import { ColorType, ShadowType } from "../../../assets/theme";

export interface CustomStyles {
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  color?: ColorType;
  padding?: string;
  border?: string;
  backgroundColor?: ColorType;
  borderRadius?: string | number;
  borderTop?: string | number;
  boxShadow?: ShadowType;
  focusOutline?: string;
  disabledBackgroundColor?: ColorType;
  display?: "block" | "inline-block" | "flex" | "inline" | "none";
}

export interface IProps {
  type:
    | "text"
    | "email"
    | "password"
    | "checkbox"
    | "radio"
    | "hidden"
    | "number";
  name: string;
  value: string | number | readonly string[];
  min?: string;
  max?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  autoComplete?: string;
  customStyle?: CustomStyles;
  maxLength?: number;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}
