import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../../../base/Button";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 8px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.markerBlue};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.white};

  .poster {
    .status {
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      font-weight: 400;
      font-size: 18px;
      line-height: 2;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      padding: 6px 0;
    }

    .details {
      display: flex;
      flex-direction: column;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
    }

    .row-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-left: 10px;

      .participants {
        .participant.author {
          z-index: 1;

          .image-wrapper {
            position: relative;

            svg {
              position: absolute;
              top: -6px;
              left: -6px;
              font-size: 12px;
              transform: rotate(-45deg);
            }
          }
        }

        .participant:not(:first-of-type) {
          margin-left: -8px;
          z-index: 1;
        }
      }
    }
  }
`;

export const MarkdownEditorWrapper = styled.div`
  flex-grow: 1;
  height: 1px;
  overflow-y: auto;
  padding: 0 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 30px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  padding: 8px;
  min-width: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  outline: 0;
  border: 0;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
`;

export const EditButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.markerBlue};
`;

export const CancelButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.scarlet};
`;

export const RegisterButton = styled(StyledButton)<{ isActive: boolean }>`
  color: ${({ theme }) => theme.colors.white};

  ${({ isActive, theme }) =>
    isActive
      ? css`
          color: ${theme.colors.white};
          background-color: ${theme.colors.markerBlue};
        `
      : css`
          background-color: ${theme.colors.disabled};
        `};
`;
