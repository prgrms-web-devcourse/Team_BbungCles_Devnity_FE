import styled from "@emotion/styled";
import { mediaQueriesBreakpoints } from "../../assets/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
`;

export const UserContainer = styled.div`
  display: grid;
  gap: 32px;

  ${mediaQueriesBreakpoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${mediaQueriesBreakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueriesBreakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaQueriesBreakpoints.largeDesktop} {
    grid-template-columns: repeat(6, 1fr);
  }

  grid-auto-rows: 360px;
  justify-content: center;
  align-items: center;
`;

export const SearchBarFormContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  gap: 0 16px;
`;

export const Select = styled.select`
  width: 15%;
  min-width: 64px;
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
  outline: none;
`;

export const Button = styled.button`
  min-width: 64px;
  margin-top: auto;
  padding: 16px 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.primary};
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors?.gray800};
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  flex-grow: 1;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 90%;
  gap: 0 8px;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 10%;
`;
