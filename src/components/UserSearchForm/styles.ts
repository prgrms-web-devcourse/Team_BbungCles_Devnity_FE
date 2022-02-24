import styled from "@emotion/styled";

export const FormContainer = styled.form`
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

export const IconWrapper = styled.div`
  margin: 0 16px;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 60%;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  margin: 0 16px;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  width: 150px;
`;
