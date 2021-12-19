import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  margin: 0 auto;
  overflow-y: auto;
  height: 100%;
  gap: 8px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Category = styled.div`
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 7px;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 5px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const DetailContainer = styled.div`
  padding: 15px 0;
  border-top: 1px solid #f1f3f5;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
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
  gap: 4px;
`;
