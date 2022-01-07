import styled from "@emotion/styled";

export const Guide = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: flex-end;
  user-select: none;
  cursor: not-allowed;
  z-index: -1;

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

export const PlaceSearchFormWrapper = styled.div`
  flex-basis: 300px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  & button {
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray200};
    }
  }
`;
