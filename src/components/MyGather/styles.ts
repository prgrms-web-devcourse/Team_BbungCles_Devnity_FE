import styled from "@emotion/styled";
import { breakpoints } from "../../assets/media";

export const Container = styled.div`
  display: flex;
  gap: 36px;
  padding: 40px 0 20px 20px;
`;

export const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
`;

export const MakeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.colors?.white};
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};

  ${breakpoints.maxTablet} {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 12px;
`;

export const LargeTitleContainer = styled.div`
  ${breakpoints.maxTablet} {
    display: none;
  }
`;

export const MediumTitleContainer = styled.div`
  display: none;

  ${breakpoints.maxTablet} {
    display: flex;
    flex-direction: row;
    gap: 16px;

    button {
      align-items: baseline;
    }
  }
`;

export const GatherListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
