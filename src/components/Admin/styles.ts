import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  gap: 32px 0;
`;

export const SelectAndErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px 0;
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 0 8px;
  width: 100%;
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
  outline: none;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const BorderContainer = styled.div<{ height?: number }>`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  border-radius: 20px;
  padding: 32px;
  width: 50%;
  min-width: 500px;
  gap: 16px;
`;

export const InviteLinkBorderContainer = styled(BorderContainer)`
  flex-grow: 1;
  overflow-y: auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px 0;
`;

export const Button = styled.button`
  padding: 16px 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors?.primary};
  border-radius: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors?.gray800};
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  align-self: center;
  min-width: 90px;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.orange600};
  }
`;

export const ErrorMessage = styled.p`
  padding: 0 16px;
  color: ${({ theme }) => theme.colors?.scarlet};
  font-size: 14px;
`;

export const InviteLinkLi = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

  &:last-child {
    border-bottom: none;
  }
`;

export const LinkInformationContainer = styled.div`
  flex-grow: 1;
`;

export const DatePicker = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors?.gray800};
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 50px;
`;

export const Th = styled.th`
  min-width: 50px;
  font-size: large;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 16px 0;
`;

export const Tr = styled.tr`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  vertical-align: middle;

  &:last-child {
    border-bottom: none;
  }
`;

export const Td = styled.td<{ textAlign?: string }>`
  text-align: ${({ textAlign }) => textAlign || "center"};
  padding: 16px 0;
`;
