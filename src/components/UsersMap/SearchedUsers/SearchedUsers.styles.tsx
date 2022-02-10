import styled from "@emotion/styled";

export const Container = styled.ul`
  position: absolute;
  top: 24px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  width: 230px;
  max-height: 70vh;
  overflow-y: auto;
  border-radius: 6px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 30px;
  }
`;

export const SearchedUserItem = styled.li`
  cursor: pointer;
  padding: 2px 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
