import styled from "@emotion/styled";
import { CSSProperties } from "react";
import Text from "../base/Text";

export const Container = styled.li`
  margin-top: 20px;
  padding: 16px 0;
  > div {
    margin-bottom: 5px;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding-left: 10px;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    font-size: 14px;
  }
`;

export const DateStyle: CSSProperties = {
  color: "#8c8d96",
  paddingRight: "10px",
};

export const DateText = styled(Text)`
  color: #8c8d96;
  padding-right: 10px;
`;
