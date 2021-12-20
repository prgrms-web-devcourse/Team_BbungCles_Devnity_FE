import styled from "@emotion/styled";
import { Map } from "react-kakao-maps-sdk";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 60%;
  gap: 16px 0;
`;

export const MyProfileForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  width: 60%;
  gap: 16px 0;
`;

export const HiddenParagraph = styled.p`
  display: none;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  min-width: 200px;
  min-height: 200px;
  margin: 20px 0;
  align-self: center;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const Button = styled.button`
  margin-top: auto;
  padding: 16px 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.primary};
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors?.gray800};
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadows.primary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors?.gray600};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors?.gray300};
  }
`;

export const Select = styled.select`
  width: 100%;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:disabled {
    background: ${({ theme }) => theme.colors?.gray300};
  }
`;

export const RowContainer = styled.div<{ cursor?: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 0 16px;
  cursor: ${({ cursor }) => cursor};
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px 0;
  flex-grow: 1;
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  min-height: 560px;
  height: 560px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
`;

export const StyledMap = styled(Map)`
  width: 100%;
  height: 100%;
`;

export const MarkdownEditorWrapper = styled.div`
  width: 100%;
  min-height: 560px;
  height: 100%;
  padding: 12px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
`;

export const ProfileModifyButton = styled.div`
  bottom: 20px;
  right: 20px;
  position: absolute;
  background-color: white;
  border-radius: 50%;
`;
