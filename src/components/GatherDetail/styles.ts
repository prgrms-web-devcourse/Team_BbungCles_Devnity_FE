import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  margin: 0 auto;
  overflow-y: auto;
  height: 100%;
  gap: 8px;
  align-items: center;
  width: 80%;
`;

export const TestContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const CategoryWrapper = styled.div<{ row?: boolean }>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  gap: 4px;
`;

export const Category = styled.div`
  width: 70px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 10px;
  flex-grow: 0;
`;

export const DetailContainer = styled.div`
  padding: 15px 0;
  border-top: 3px solid #f1f3f5;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
`;

export const TextWrapper = styled.div`
  padding-left: 3px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 0;
  gap: 16px;

  button {
    font-size: 16px;
    border: none;
    background-color: ${({ theme }) => theme.colors.skyblue};
    border-radius: 4px;
    padding: 5px 3px;
    width: 100px;
    height: 40px;
  }
`;

export const EditDeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Select = styled.select`
  width: 100%;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  input {
    width: 80%;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors?.gray300};
  }
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const ApplicantContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  padding-left: 4px;
`;

export const MarkdownEditorWrapper = styled.div`
  width: 100%;
  height: 360px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
`;

export const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  border-radius: 20px;
  padding: 32px;
  width: 100%;
  min-width: 560px;
  gap: 28px;
  height: auto;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px 0;
  height: auto;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 8px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 24px;
`;

export const EmptyTextWrapper = styled.div`
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Button = styled.button`
  min-width: 64px;
  margin-top: auto;
  padding: 16px 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors?.newPrimary};
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors?.gray800};
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  flex-grow: 1;
  height: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange600};
  }
`;
