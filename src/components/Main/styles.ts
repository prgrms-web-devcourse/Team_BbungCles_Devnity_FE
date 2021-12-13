import styled from "@emotion/styled";
import { breakpoints } from "../../assets/media";
import { FILTER_GATHERLIST, FILTER_MAPGAKCO } from "./Main";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray200};
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
  gap: 20px;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelfIntroduce = styled.div`
  width: 100%;
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

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const MapgakcoAndGatherListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
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

  ${breakpoints.maxTablet} {
    display: flex;
  }
`;

export const SubContents = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 10px;

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
`;

export const MapgakcoWrapper = styled.div<{ filter: string }>`
  flex-grow: 1;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  outline: 1px solid rgba(255, 255, 255, 0.18);
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
