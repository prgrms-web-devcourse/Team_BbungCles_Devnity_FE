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

  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
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
