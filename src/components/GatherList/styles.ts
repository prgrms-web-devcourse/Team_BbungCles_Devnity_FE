import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const GatherLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  box-shadow: 0 2px 5px 1px ${({ theme }) => `${theme.colors?.gray800}25`};
  padding: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const FinishItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 80%;
  padding: 20px;
`;

export const Category = styled.div`
  background-color: ${({ theme }) => theme.colors.scarlet};
  border-radius: 7px;
  padding: 12px;
`;

export const Finish = styled.div`
  background-color: ${({ theme }) => theme.colors.gray700};
  border-radius: 7px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  gap: 8px;
  padding-left: 3px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
