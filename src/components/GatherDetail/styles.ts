import styled from "@emotion/styled";
import Button from "../base/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  gap: 8px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding: 0 20px 20px 20px;
  margin: 0 auto;
  gap: 8px;
`;

export const CommentListContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 60px 20px;
`;

export const InnerContainer = styled.div`
  width: 60%;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Tag = styled.div<{ category?: string }>`
  width: 70px;
  height: 35px;
  background-color: ${({ category, theme }) =>
    category ? theme.colors[category] : theme.colors.gray800};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 10px;
  flex-grow: 0;
`;

export const InfoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 28px;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 0 12px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const AuthorButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
`;

export const ApplyButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)<{ isApplied?: boolean }>`
  font-size: 16px;
  border: none;
  background-color: ${({ isApplied, theme }) =>
    isApplied ? theme.colors.scarlet : theme.colors.markerBlue};
  color: white;
  padding: 12px 16px;
  width: 100%;
  border-radius: 0 0 20px 20px;
  font-weight: bold;
`;

export const EditDeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ApplicantContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  padding-left: 4px;
`;

export const MarkdownEditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  margin-top: 20px;
`;

export const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  border-radius: 20px;
  width: 100%;
  min-width: 560px;
  gap: 16px;
  height: auto;
  background-color: white;
  margin-top: 32px;
`;

export const CommentBorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  border-radius: 20px;
  padding: 32px;
  width: 100%;
  min-width: 560px;
  gap: 32px;
  overflow-y: auto;
  min-height: 560px;
  background-color: white;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px 0;
  height: auto;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 8px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 24px;
`;

export const EmptyTextWrapper = styled.div`
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const CommentButton = styled.button`
  min-width: 64px;
  margin-top: auto;
  padding: 16px 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors?.newPrimary};
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors?.gray800};
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  flex-grow: 1;
  height: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange600};
  }
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px 3px;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 14px;
  text-decoration: underline;
`;
