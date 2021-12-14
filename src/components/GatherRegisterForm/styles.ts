import styled from "@emotion/styled";
import { CSSProperties } from "react";
import theme from "../../assets/theme";

export const ClickedStyle: CSSProperties = {
  color: theme.colors.white,
  backgroundColor: theme.colors.orange400,
  padding: "12px",
  borderRadius: "6px",
  fontWeight: 600,
};

export const NormalStyle: CSSProperties = {
  color: theme.colors.fontColor,
  border: `1px solid ${theme.colors.gray400}`,
  padding: "12px",
  borderRadius: "6px",
  fontWeight: 600,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
