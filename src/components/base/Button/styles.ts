import styled from "@emotion/styled";

export const StyledButton = styled.button<{ width: string }>`
  width: ${({ width }) => width};
`;
