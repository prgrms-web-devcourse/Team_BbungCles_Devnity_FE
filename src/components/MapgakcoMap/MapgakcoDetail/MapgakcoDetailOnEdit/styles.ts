import styled from "@emotion/styled";
import DatePicker from "react-datepicker";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.gray200};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.black};

  .poster {
    .status {
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
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

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const HiddenLabel = styled.label`
  display: none;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #757575;
  background-color: transparent;
  font-size: 16px;
`;

export const StyledDatePicker = styled(DatePicker)`
  color: ${({ theme }) => theme.colors?.gray800};
  outline: none;
  border: none;
  border-bottom: 1px solid #757575;
  background-color: transparent;
  font-size: 16px;
`;
