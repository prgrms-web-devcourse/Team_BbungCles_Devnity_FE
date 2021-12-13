import { useState } from "react";
import ToggleButton from "./ToggleButton";

interface Props {
  text: string;
  onToggle: ({ selected: boolean, name: string }) => void; // 체크
  name?: string;
  size?: number;
  toggleColor?: string;
}

const ToggleButtonContainer = ({
  text,
  onToggle,
  name,
  size,
  toggleColor,
}: Props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onToggle({ selected: !selected, name });
  };
  return (
    <ToggleButton
      text={text}
      name={name}
      size={size}
      toggleColor={toggleColor}
      handleClick={handleClick}
    />
  );
};
export default ToggleButtonContainer;
