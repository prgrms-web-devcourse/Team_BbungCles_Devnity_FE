import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  height: 100%;
`;

export const Header = styled.header`
  height: 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;

export const Contents = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const SelfIntroduce = styled.div`
  margin-bottom: 40px;
  border: 1px solid;
  // TODO: 유저 카드 아이템(UserCardItem)이 완성되면 삭제한다.
  word-break: break-all;
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
  border: 1px solid;
`;

export const GatherListSummary = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid;
`;
