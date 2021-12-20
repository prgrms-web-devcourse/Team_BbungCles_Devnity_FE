import styled from "@emotion/styled";

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
        .participant:not(:first-of-type) {
          margin-left: -8px;
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
