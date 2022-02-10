import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MapFloatControlContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 230px;
`;

export const SearchFormContainer = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: none;
  outline: none;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 60%;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  margin: 0 4px;
`;
