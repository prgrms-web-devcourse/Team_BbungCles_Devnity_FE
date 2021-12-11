import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
`;

export const MyProfileForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  width: 50%;
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
  // TODO : box-shadow 부분을 theme으로 빼도 좋을 것 같음
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
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
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};

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
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:disabled {
    background: ${({ theme }) => theme.colors?.gray300};
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 16px;
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
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
  resize: none;

  &:focus {
    outline: none;
  }
`;
