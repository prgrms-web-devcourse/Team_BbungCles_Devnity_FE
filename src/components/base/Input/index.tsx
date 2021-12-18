import { StyledInput, CustomStyledInput } from "./styles";
import { IProps } from "./types";

const Input = ({
  type,
  name,
  value,
  checked,
  disabled,
  required,
  readOnly,
  placeholder,
  autoComplete,
  customStyle,
  min,
  max,
  onChange,
  onBlur,
  maxLength,
}: IProps) => {
  return customStyle ? (
    <CustomStyledInput
      type={type}
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
      onBlur={onBlur}
      customStyle={customStyle}
      maxLength={maxLength}
      min={min}
      max={max}
    />
  ) : (
    <StyledInput
      type={type}
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onBlur={onBlur}
      onChange={onChange}
      maxLength={maxLength}
      min={min}
      max={max}
    />
  );
};

export default Input;
