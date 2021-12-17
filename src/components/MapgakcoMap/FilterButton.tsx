import { ReactChild } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import theme from "../../assets/theme";
import Button from "../base/Button";

interface Props {
  filter: boolean;
  children: ReactChild;
  onClick: (event: React.MouseEvent) => void;
}

const FilterButton = ({ filter, onClick, children }: Props) => {
  const buttonStyle = {
    padding: "8px",
    minWidth: "80px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    boxShadow: theme.boxShadows.primary,
  };

  return (
    <Button style={buttonStyle} onClick={onClick}>
      {filter ? (
        <BsEye style={{ marginRight: 4 }} />
      ) : (
        <BsEyeSlash style={{ marginRight: 4 }} />
      )}
      {children}
    </Button>
  );
};

export default FilterButton;
