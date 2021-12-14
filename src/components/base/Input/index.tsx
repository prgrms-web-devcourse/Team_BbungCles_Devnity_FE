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
  onChange,
  onBlur,
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
    />
  );
};

export default Input;
