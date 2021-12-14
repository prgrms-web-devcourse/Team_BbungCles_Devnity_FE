import styled from "@emotion/styled";
import theme from "../../assets/theme";
import { CustomStyles } from "../base/Input/types";

export const Container = styled.form`
  width: 70%;
  height: 100%;
  border: none;
`;

export const HiddenLabel = styled.label`
  display: none;
`;

export const searchInputStyle: CustomStyles = {
  width: "100%",
  height: "100%",
  padding: "12px",
  borderRadius: "6px 0 0 6px",
  border: `1px solid ${theme.colors.orange400}`,
  placeholderColor: "orange100",
};

export const SearchButton = styled.button`
  width: 15%;
  height: 100%;
  background-color: ${theme.colors.orange400};
  color: ${theme.colors.white};
  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  font-size: 16px;
`;
