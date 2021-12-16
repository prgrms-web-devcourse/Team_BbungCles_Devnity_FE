import styled from "@emotion/styled";
import Button from "../base/Button";

export const Container = styled.div`
  position: relative;

  background-color: ${({ theme }) => theme.colors.gray200};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MapFloatContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const Guide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  user-select: none;
  cursor: not-allowed;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 35px;

    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background: #fff;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchForm = styled.form`
  flex-basis: 300px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled(Button)`
  outline: 1px solid;
  padding: 4px 8px;
`;
