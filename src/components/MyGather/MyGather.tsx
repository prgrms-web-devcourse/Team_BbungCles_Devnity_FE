import { useState } from "react";
import Text from "../base/Text";
import {
  AllContainer,
  MakeContainer,
  Container,
  TitleContainer,
  GatherListContainer,
  GatherContainer,
  BothTitleContainer,
  FilterButton,
} from "./styles";
import { Gather } from "../../types/gather";
import GatherList from "../GatherList/GatherList";
import theme from "../../assets/theme";

interface Props {
  applyData: Array<Gather>;
  makeData: Array<Gather>;
}

export const FILTER_APPLY = "show_applyList";
export const FILTER_MAKE = "show_makelist";

const MyGather = ({ applyData, makeData }: Props) => {
  const [filter, setFilter] = useState(FILTER_APPLY);
  return (
    <Container>
      <Text size={24} strong>
        내 모임 관리
      </Text>
      <GatherContainer>
        <AllContainer>
          <BothTitleContainer>
            <FilterButton onClick={() => setFilter(FILTER_APPLY)}>
              <>
                <Text
                  size={20}
                  strong
                  color={
                    filter === FILTER_APPLY
                      ? theme.colors.black
                      : theme.colors.disabled
                  }
                >
                  🎈 신청
                </Text>
                <Text
                  size={15}
                  color={
                    filter === FILTER_APPLY
                      ? theme.colors.black
                      : theme.colors.disabled
                  }
                >
                  한 모임
                </Text>
              </>
            </FilterButton>
            <FilterButton onClick={() => setFilter(FILTER_MAKE)}>
              <>
                <Text
                  size={20}
                  color={
                    filter === FILTER_MAKE
                      ? theme.colors.black
                      : theme.colors.disabled
                  }
                  strong
                >
                  🚩 등록
                </Text>
                <Text
                  size={15}
                  color={
                    filter === FILTER_MAKE
                      ? theme.colors.black
                      : theme.colors.disabled
                  }
                >
                  한 모임
                </Text>
              </>
            </FilterButton>
          </BothTitleContainer>
          <GatherListContainer>
            <GatherList
              gatherData={filter === FILTER_APPLY ? applyData : makeData}
              pagee="MyGather"
            />
          </GatherListContainer>
        </AllContainer>
        <MakeContainer>
          <TitleContainer>
            <span style={{ fontSize: "30px" }}>🚩</span>
            <Text size={20} strong>
              신청
            </Text>
            <Text size={18}>한 모임</Text>
          </TitleContainer>
          <GatherListContainer>
            <GatherList gatherData={applyData} pagee="MyGather" />
          </GatherListContainer>
        </MakeContainer>
        <MakeContainer>
          <TitleContainer>
            <span style={{ fontSize: "30px" }}>🚩</span>
            <Text size={20} strong>
              등록
            </Text>
            <Text size={18}>한 모임</Text>
          </TitleContainer>
          <GatherListContainer>
            <GatherList gatherData={makeData} pagee="MyGather" />
          </GatherListContainer>
        </MakeContainer>
      </GatherContainer>
    </Container>
  );
};

export default MyGather;
