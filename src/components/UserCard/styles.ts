import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 220px;
  padding-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  overflow-x: hidden;

  // glassmorphism-ish outline
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  outline: 1px solid rgba(255, 255, 255, 0.18);

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Header = styled.header``;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  aspect-ratio: 1.8;
  background-color: ${({ theme }) => theme.colors.gray400};
`;

export const Section = styled.section`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 0 10px;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const SummaryWrapper = styled.div``;

export const Footer = styled.footer`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding: 0 10px;
`;
