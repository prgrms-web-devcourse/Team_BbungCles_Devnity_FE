import DatePicker from "react-datepicker";
import styled from "@emotion/styled";
import "react-datepicker/dist/react-datepicker.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 90vh;
  overflow-y: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0 20px;
  align-self: flex-end;
  margin-top: auto;
`;

export const Button = styled.button`
  min-width: 64px;
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.orange400};
  border-radius: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.white};
  width: 100px;
  height: 100%;
  font-weight: 600;
  align-self: flex-end;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange600};
  }
`;

export const CancelButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.fontColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  height: 100%;
`;

export const ErrorMessage = styled.p`
  padding: 0 16px;
  color: ${({ theme }) => theme.colors?.scarlet};
  font-size: 14px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
  outline: none;
`;

export const MarkdownEditorWrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
`;
