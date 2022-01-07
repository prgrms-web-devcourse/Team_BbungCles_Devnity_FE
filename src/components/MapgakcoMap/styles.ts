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

export const MapFloatControlWrapper = styled.div`
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

export const SliderContainer = styled.div``;

export const Dimmer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 52px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
