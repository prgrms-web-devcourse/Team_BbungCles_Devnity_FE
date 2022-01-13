import { ReactChild } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { StyledButton } from "./styles";

interface Props {
  visible: boolean;
  children: ReactChild;
  onClick: (event: React.MouseEvent) => void;
}

const FilterButton = ({ visible, children, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick}>
      {visible ? (
        <BsEye style={{ marginRight: 4 }} />
      ) : (
        <BsEyeSlash style={{ marginRight: 4 }} />
      )}
      {children}
    </StyledButton>
  );
};

export default FilterButton;
