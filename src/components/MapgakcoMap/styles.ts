import styled from "@emotion/styled";

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

export const Slider = styled.div`
  position: fixed;
  top: 0;
  left: -340px;
  width: 330px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 2;

  transition: 0.4s;
  padding: 8px;
`;

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

export const PlaceSearchFromContainer = styled.div`
  position: relative;
`;

export const SearchResultForm = styled.form`
  position: relative;
  flex-basis: 300px;
  font-size: 16px;
`;

export const SearchResultListContainer = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  display: flex;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};

  ul {
    flex-grow: 1;

    li {
      padding: 6px 0px;
      font-size: 13px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray100};
      }

      &:first-of-type {
        padding: 10px 0px;
      }

      div {
        padding: 2px 10px;

        &:not(:first-of-type) {
          font-size: 12px;
          color: ${({ theme }) => theme.colors.gray800};
        }
      }
    }
  }
`;
