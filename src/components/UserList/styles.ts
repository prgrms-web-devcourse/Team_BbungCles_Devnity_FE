import styled from "@emotion/styled";
import { mediaQueriesBreakpoints } from "../../assets/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  gap: 64px 0;
`;

export const UserContainer = styled.div`
  display: grid;
  gap: 32px;
  place-items: center;

  ${mediaQueriesBreakpoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${mediaQueriesBreakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQueriesBreakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaQueriesBreakpoints.middleDesktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaQueriesBreakpoints.largeDesktop} {
    grid-template-columns: repeat(5, 1fr);
  }

  grid-auto-rows: 360px;
  justify-content: center;
  align-items: center;
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

export const ProfileCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 220px;
`;

export const NotFoundResult = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchBarFormContainer = styled.form`
  display: flex;
  padding: 4px 16px;
  width: 60%;
  min-width: 500px;
  height: 64px;
  align-items: center;
  align-self: center;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadows.secondary};
`;

export const Select = styled.select`
  border: none;
  outline: none;
  width: 150px;
`;
