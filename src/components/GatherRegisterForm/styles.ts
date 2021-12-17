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

export const LabelContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Textarea = styled.textarea`
  height: 150px;
  padding: 16px;
  resize: none;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${theme.colors?.gray800}25;

  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const ErrorMessage = styled.p`
  padding: 0 16px;
  color: ${theme.colors?.scarlet};
  font-size: 14px;
`;
