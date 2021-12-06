import styled from "@emotion/styled";

export const LoginContainer = styled.div``;

export const LoginForm = styled.form`
  display: inline-flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors?.scarlet};
`;
