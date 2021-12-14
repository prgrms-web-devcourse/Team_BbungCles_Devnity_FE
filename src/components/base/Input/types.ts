import { FocusEvent, FormEvent } from "react";
import { ColorType, ShadowType } from "../../../assets/theme";

export interface CustomStyles {
  width?: string | number;
  color?: ColorType;
  padding?: string;
  border?: string;
  backgroundColor?: ColorType;
  borderRadius?: string | number;
  borderTop?: string | number;
  boxShadow?: ShadowType;
  focusOutline?: string;
  placeholderColor?: ColorType;
  disabledBackgroundColor?: ColorType;
}

export interface IProps {
  type: "text" | "email" | "password" | "checkbox" | "radio" | "hidden";
  name: string;
  value: string | number | readonly string[];
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  autoComplete?: string;
  customStyle?: CustomStyles;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}
