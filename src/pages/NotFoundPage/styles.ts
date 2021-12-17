import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
`;

export const LottieWrapper = styled.div`
  padding: 56px;
  width: 90%;
  height: 90%;
`;

export const Button = styled.button`
  margin-bottom: 56px;
  padding: 16px 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors?.primary};
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors?.gray800};
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.orange600};
  }
`;
