import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 5px 0;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.orange100};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: 14px;
  }

  &:disabled {
    opacity: 40%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  background: ${({ theme }) => theme.colors.orange400};
  border-radius: 4px;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.orange500};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
