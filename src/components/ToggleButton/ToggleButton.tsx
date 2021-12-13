import styled from "@emotion/styled";

interface Props {
  text?: string;
  name?: string;
  size?: number;
  toggleColor?: string;
  handleClick?: () => void;
  selected?: boolean;
}

const StyledButton = styled.button<Props>`
  width: ${(props) => `${props.size}px`};
  background-color: ${(props) =>
    props.selected ? props.toggleColor : undefined};
`;

const ToggleButton = ({
  text,
  name,
  size,
  toggleColor,
  handleClick,
  selected,
}: Props) => {
  return (
    <StyledButton
      name={name}
      size={size}
      selected={selected}
      toggleColor={toggleColor}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
};

export default ToggleButton;
