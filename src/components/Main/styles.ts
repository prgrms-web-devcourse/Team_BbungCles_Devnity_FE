import styled from "@emotion/styled";
import { breakpoints } from "../../assets/media";
import Button from "../base/Button";
import { FILTER_GATHERLIST, FILTER_MAPGAKCO } from "./Main";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
`;

export const Contents = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 32px 20px;
  width: 100%;
  overflow-y: auto;
  padding: 0 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelfIntroduce = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  > span {
    padding-left: 10px;
    padding-top: 4px;
  }

  ul {
    display: flex;
    padding: 10px;
    gap: 20px;
    width: 100%;
    overflow-x: auto;

    height: 320px;

    &::-webkit-scrollbar {
      display: none;
    }

    & li {
      margin-right: 20px;
    }
  }
`;

export const MapgakcoAndGatherListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 10px;
  overflow-y: hidden;
`;

export const TextOuterContainer = styled.div`
  display: flex;
`;

export const TextInnerContainerLarge = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  & span {
    display: block;
    width: 100%;
  }

  ${breakpoints.maxTablet} {
    display: none;
  }
`;

export const TextInnerContainerMedium = styled.div`
  display: none;
  gap: 20px;
  overflow-y: hidden;

  ${breakpoints.maxTablet} {
    display: flex;
  }
`;

export const SubContents = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 10px;
  overflow-y: hidden;
`;

export const MapgakcoWrapper = styled.div<{ filter: string }>`
  flex-grow: 1;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  overflow: hidden;

  ${breakpoints.maxTablet} {
    display: ${({ filter }) => (filter === FILTER_MAPGAKCO ? "block" : "none")};
  }
`;

export const GatherListWrapper = styled.div<{ filter: string }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: calc(100% / 2);
  overflow-y: auto;
  padding: 0 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 30px;
  }

  ${breakpoints.maxTablet} {
    display: ${({ filter }) =>
      filter === FILTER_GATHERLIST ? "block" : "none"};
    max-width: none;
  }
`;

export const GatherListSummary = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: calc(100% / 1.9);

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 30px;
  }

  ${breakpoints.maxTablet} {
    max-width: none;
  }
`;

export const MapgakcoAndGatherListWrapperMd = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  display: none;

  ${breakpoints.maxTablet} {
    display: flex;
  }
`;

export const FilteredContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const FilterButton = styled(Button)`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0;
`;
