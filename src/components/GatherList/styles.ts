import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { gatherBreakpoints } from "../../assets/media";

export const GatherLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const ItemContainer = styled.div<{ isClose?: boolean }>`
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

export const TextContainer = styled.div<{ page: string }>`
  font-size: ${({ page }) => (page === "MyGather" ? "14px" : "16px")};
  padding-right: 40px;

  ${gatherBreakpoints.mobile} {
    font-size: 6px;
  }
`;

export const FinishItem: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "12px",
  backgroundColor: "lightgrey",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  opacity: "80%",
  padding: "16px",
};

export const Category = styled.div`
  background-color: ${({ theme }) => theme.colors.MAPGAKCO};
  border-radius: 7px;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  width: 70px;
  height: 35px;
  align-items: center;
  justify-content: center;
  color: black;

  ${gatherBreakpoints.mobile} {
    font-size: 6px;
    padding: 6px;
    width: auto;
    height: 35px;
  }
`;

export const Finish = styled.div<{ page: string }>`
  background-color: ${({ theme }) => theme.colors.gray700};
  border-radius: 7px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  display: ${({ page }) => (page === "MyGather" ? "none" : "flex")};
  align-items: center;

  ${gatherBreakpoints.mobile} {
    display: none;
  }
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  gap: 8px;
  padding-left: 3px;
  width: 50%;

  span {
    ${gatherBreakpoints.mobile} {
      font-size: 14px;
    }
  }
`;

export const InfoWrapper = styled.div<{ page: string }>`
  display: flex;
  gap: 14px;
  font-size: ${({ page }) => (page === "MyGather" ? "12px" : "12px")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${gatherBreakpoints.mobile} {
    span {
      font-size: 3px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;
`;
