import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px;
  width: 100%;
  height: 100%;
`;

export const SearchAndWriteContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export const WriteButton = styled.button`
  width: 15%;
  height: 100%;
  margin-left: 4px;
  background-color: ${({ theme }) => theme.colors.skyblue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;
