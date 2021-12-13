import styled from "@emotion/styled";
import React from "react";
import theme from "../../assets/theme";
import ToggleButtonContainer from "../ToggleButton/ToggleButtonContainer";

const ButtonContainer = styled.div`
  display: flex;
`;

interface IProps {
  categoryList: Array<string>;
  onToggle: ({ selected: boolean, name: string }) => void;
}

const CategoryButtons = ({ categoryList, onToggle }: IProps) => (
  <ButtonContainer>
    {React.Children.toArray(
      categoryList.map((category) => (
        <ToggleButtonContainer
          key={category}
          text={category}
          name={category}
          size={49}
          toggleColor={theme.colors.orange700}
          onToggle={onToggle}
        />
      ))
    )}
  </ButtonContainer>
);

export default CategoryButtons;
