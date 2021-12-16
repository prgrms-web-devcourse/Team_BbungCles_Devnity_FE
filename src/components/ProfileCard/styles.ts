import styled from "@emotion/styled";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  max-width: 240px;
  height: 100%;
  justify-self: center;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;

export const ImageWrapper = styled.div`
  flex-grow: 1;
  height: 216px;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  padding: 0 8px;
  margin: 16px 0;
`;

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
`;

export const DescriptionWrapper = styled.div<{ course: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-self: center;
  background-color: ${({ theme, course }) => theme.colors.course[course]};
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  overflow: hidden;

  &:last-child {
    border-right: 0;
  }
`;

export const LikeAndCommentContainer = styled.div`
  display: flex;
  padding: 0 8px;
  gap: 0 8px;
  margin-bottom: 8px;
`;
