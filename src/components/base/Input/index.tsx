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
      onChange={onChange}
    />
  );
};

export default Input;
