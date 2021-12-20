import styled from "@emotion/styled";
import { Map } from "react-kakao-maps-sdk";
import { ColorType } from "../../assets/theme";
import { common } from "../../constants";

interface UserTagProps {
  course?: string;
  mbti?: string;
  color?: ColorType;
  fontSize?: number;
  strong?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px 0;
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
`;

export const UserTag = styled.div<UserTagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  padding: 16px;
  background-color: ${({ theme, course }) =>
    theme.colors[common.colorMap[course]] || theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  border-radius: 10px;
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.white};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "12px")};
  font-weight: ${(props) => (props.strong ? "bold" : "normal")};
`;

export const MbtiTag = styled(UserTag)`
  background-color: ${({ theme, mbti }) => theme.colors.mbti[mbti]};
  color: ${({ theme }) => theme.colors.gray800};
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

export const BorderContainer = styled.div<{ height?: number }>`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  border-radius: 20px;
  padding: 32px;
  width: 60%;
  min-width: 500px;
  gap: 32px;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
`;

export const DescriptionBorderContainer = styled(BorderContainer)`
  min-height: 560px;
  height: auto;
`;

export const CommentBorderContainer = styled(BorderContainer)`
  overflow-y: auto;
  min-height: 560px;
  height: auto;
`;

export const ContactContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export const BlankLink = styled.a`
  margin-left: auto;

  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

export const StyledMap = styled(Map)`
  width: 100%;
  height: 100%;
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

export const Button = styled.button`
  min-width: 64px;
  margin-top: auto;
  padding: 16px 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors?.primary};
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

export const HiddenLabel = styled.label`
  display: none;
`;

export const IconWrapper = styled.div`
  height: 24px;
  margin-right: 36px;
`;

export const EmptyTextWrapper = styled.div`
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const EllipsisWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
