import styled from "@emotion/styled";
import { css } from "@emotion/react";
import DatePicker from "react-datepicker";
import theme from "../../assets/theme";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../base/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px;
  height: 90vh;
  overflow-y: auto;
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

export const MarkdownEditorWrapper = styled.div`
  width: 100%;
  height: 360px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: ${theme.boxShadows.primary};
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  color: ${theme.colors?.gray800};
  padding: 16px;
  border: none;
  background-color: ${theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${theme.colors?.gray800}25;
  outline: none;
`;

export const CancelButton = styled(Button)`
  background-color: ${theme.colors.white};
  color: ${theme.colors.fontColor};
  border: 1px solid ${theme.colors.gray400};
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  justify-content: center;
`;

export const RegisterButton = styled(Button)`
  background-color: ${theme.colors.newPrimary};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray400};
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  justify-content: center;
  border: none;
`;

export const CategoryButton = styled(Button)<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive
      ? css`
          color: ${theme.colors.white};
          border: none;
          background-color: ${theme.colors.newPrimary};
          padding: 12px;
          border-radius: 6px;
          font-weight: 600;
        `
      : css`
          color: ${theme.colors.fontColor};
          border: 1px solid ${theme.colors.gray400};
          background-color: ${theme.colors.white};
          padding: 12px;
          border-radius: 6px;
          font-weight: 600;
        `}
`;
