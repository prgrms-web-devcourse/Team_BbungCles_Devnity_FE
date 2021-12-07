import styled from "@emotion/styled";
import theme from "../../assets/theme";

export const CommentContainer = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const CommentWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 24px;
  color: ${theme.colors.fontColor};
  padding: 5px 0;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  resize: none;

  &:focus {
    border-color: red;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  &::placeholder {
    color: #b2b3b9;
    font-size: 16px;
  }

  &:disabled {
    opacity: 40%;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  display: block;
  width: 100px;
  height: 40px;
  background: ${theme.colors.orange400};
  border-radius: 4px;
  right: 0px;
  border: none;

  &:hover {
    background: ${theme.colors.orange500};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
