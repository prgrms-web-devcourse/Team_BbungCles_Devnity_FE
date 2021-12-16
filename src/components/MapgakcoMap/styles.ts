import styled from "@emotion/styled";
import Button from "../base/Button";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray200};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GuideMessage = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchForm = styled.form``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled(Button)`
  outline: 1px solid;
  padding: 4px 8px;
`;
