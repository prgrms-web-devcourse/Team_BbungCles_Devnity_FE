import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 20px;
  width: 100%;
  height: 100%;
`;

export const SearchAndWriteContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export const SearchForm = styled.form`
  width: 70%;
  height: 100%;
  border: none;
`;

export const HiddenLabel = styled.label`
  display: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.orange400};

  &::placeholder {
    color: ${({ theme }) => theme.colors.orange100};
  }
`;

export const SearchButton = styled.button`
  width: 15%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.orange400};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  font-size: 16px;
`;

export const WriteButton = styled.button`
  width: 15%;
  height: 100%;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.colors.skyblue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;
