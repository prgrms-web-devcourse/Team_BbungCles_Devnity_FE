import styled from "@emotion/styled";
import { breakpoints } from "../../assets/media";

export const Container = styled.nav`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.gray300};

  ${breakpoints.maxTablet} {
    width: 52px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;

  ${breakpoints.maxTablet} {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  cursor: pointer;

  ${breakpoints.maxTablet} {
    display: none;
  }
`;

export const Nav = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
    flex-grow: 1;
  }

  & li {
    padding: 16px 0px;
    font-size: 18px;
    cursor: pointer;

    &:first-of-type {
      display: none;

      ${breakpoints.maxTablet} {
        display: block;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray300};
    }

    div {
      display: flex;
      gap: 16px;
      padding: 0 32px;

      ${breakpoints.maxTablet} {
        padding: 0;
        justify-content: center;
      }

      span {
        ${breakpoints.maxTablet} {
          display: none;
        }
      }
    }
  }
`;

export const Footer = styled.div``;

export const LottieWrapper = styled.div`
  padding: 0 12px;
  aspect-ratio: 1.4;
`;
