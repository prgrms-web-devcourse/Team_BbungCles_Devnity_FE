import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0 20px;
  align-self: flex-end;
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

export const DatePicker = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
`;

export const Textarea = styled.textarea`
  height: 160px;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
  border: none;
  outline: none;
  resize: none;
`;
