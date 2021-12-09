import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div<{ isTriggered }>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 140px;
  background-color: ${({ theme }) => theme.colors.gray200};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 6px;

  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;

  ${({ isTriggered }) =>
    isTriggered &&
    css`
      max-height: 500px;
      transition: max-height 0.5s cubic-bezier(0.98, 0.04, 0.7, 0.32);
    `}

  ul {
    width: 100%;

    li {
      display: block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:last-of-type {
        border-bottom: 0;
      }

      a {
        display: block;
        padding: 10px 20px;
        color: ${({ theme }) => theme.colors.gray700};
        transition: 0.2s;
        font-weight: 500;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.45);

        a {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`;
