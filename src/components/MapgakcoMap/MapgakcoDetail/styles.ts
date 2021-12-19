import styled from "@emotion/styled";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 8px;
`;

export const Card = styled.div`
  background: #ed1c40;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.white};

  .poster {
    h2 {
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      font-weight: 400;
      font-size: 18px;
      line-height: 2;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    h1 {
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
      margin-top: 10px;
    }

    .row-item {
      padding-left: 10px;
    }
  }
`;

export const MarkdownEditorWrapper = styled.div`
  flex-grow: 1;
`;
