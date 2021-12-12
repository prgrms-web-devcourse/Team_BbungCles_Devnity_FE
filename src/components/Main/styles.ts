import styled from "@emotion/styled";

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
  overflow-y: auto;
  width: 100%;
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

export const MapgakcoAndGatherListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  padding: 10px;
`;

export const MapgakcoSummary = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MapgakcoContainerWrapper = styled.div`
  flex-grow: 1;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  outline: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
`;

export const GatherListSummary = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: calc(100% / 1.9);
`;
