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

export const UserDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
`;

export const SelfIntroduce = styled.div`
  margin-bottom: 40px;
  width: 100%;

  ul {
    display: flex;
    padding: 10px 10px;
    gap: 20px;
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const MapgakcoAndGatherListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const MapgakcoSummary = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const GatherListSummary = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
