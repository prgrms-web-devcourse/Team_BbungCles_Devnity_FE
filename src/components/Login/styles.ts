import styled from "@emotion/styled";
import { css } from "@emotion/react";

// TODO: 이 부분도 공통으로 분리해도 될듯
const displayNone = () => css`
  display: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  width: 400px;
  box-shadow: 0 8px 32px 0 ${({ theme }) => `${theme.colors?.gray600}`};
  border-radius: 10px;
  overflow-y: auto;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px;

  img {
    margin-bottom: 32px;
  }
`;

export const LoginForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 20px 0;
  width: 100%;
  height: 100%;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors?.scarlet};
`;

// TODO: 이 부분도 공통으로 만들어야 함
export const Title = styled.h1`
  align-self: center;
  font-size: 36px;
  margin: 32px 0;
  color: ${({ theme }) => theme.colors?.gray800};
`;

export const Button = styled.button`
  width: 100%;
  margin-top: auto;
  padding: 16px 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.primary};
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors?.gray800};
  // TODO : box-shadow 부분을 theme으로 빼도 좋을 것 같음
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
`;

export const GuestButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray400};
`;

export const HiddenLabel = styled.label`
  ${displayNone}
`;

export const HiddenParagraph = styled.p`
  ${displayNone}
`;
