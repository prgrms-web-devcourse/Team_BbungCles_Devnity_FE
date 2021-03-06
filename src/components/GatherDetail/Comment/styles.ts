import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;

  &::after {
    content: "";
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  }

  &:last-child::after {
    content: none;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  flex-grow: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 28px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px 0;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

export const InputWrapperForm = styled.form`
  display: flex;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 16px;
`;
