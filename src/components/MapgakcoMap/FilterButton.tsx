import { ReactChild } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import theme from "../../assets/theme";
import Button from "../base/OldButton";

interface Props {
  visible: boolean;
  children: ReactChild;
  onClick: (event: React.MouseEvent) => void;
}

const FilterButton = ({ visible, children, onClick }: Props) => {
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
      {visible ? (
        <BsEye style={{ marginRight: 4 }} />
      ) : (
        <BsEyeSlash style={{ marginRight: 4 }} />
      )}
      {children}
    </Button>
  );
};

export default FilterButton;
