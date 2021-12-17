import { useState } from "react";
import Text from "../base/Text";
import {
  AllContainer,
  MakeContainer,
  Container,
  TitleContainer,
  GatherListContainer,
  LargeTitleContainer,
  MediumTitleContainer,
} from "./styles";
import { Gather } from "../../types/gather";
import GatherList from "../GatherList/GatherList";
import Button from "../base/Button";
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
      <AllContainer>
        <TitleContainer>
          <LargeTitleContainer>
            <span style={{ fontSize: "30px" }}>🎈</span>
            <Text size={20} strong>
              신청
            </Text>
            <Text size={18}>한 모임</Text>
          </LargeTitleContainer>
          <MediumTitleContainer>
            <Button onClick={() => setFilter(FILTER_APPLY)}>
              <>
                <span
                  style={{
                    fontSize: "20px",
                    color:
                      filter === FILTER_APPLY
                        ? theme.colors.black
                        : theme.colors.disabled,
                  }}
                >
                  🎈
                </span>
                <Text
                  size={20}
                  strong
                  color={
                    filter === FILTER_APPLY
                      ? theme.colors.black
                      : theme.colors.disabled
                  }
                >
                  신청
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
            </Button>
            <Button onClick={() => setFilter(FILTER_MAKE)}>
              <>
                <span
                  style={{
                    fontSize: "20px",
                    color:
                      filter === FILTER_MAKE
                        ? theme.colors.black
                        : theme.colors.disabled,
                  }}
                >
                  🚩
                </span>
                <Text
                  size={20}
                  color={
                    filter === FILTER_MAKE
                      ? theme.colors.black
                      : theme.colors.disabled
                  }
                  strong
                >
                  등록
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
            </Button>
          </MediumTitleContainer>
        </TitleContainer>
        <GatherListContainer>
          <GatherList
            gatherData={filter === FILTER_APPLY ? applyData : makeData}
            page="MyGather"
          />
        </GatherListContainer>
      </AllContainer>
      <MakeContainer>
        <TitleContainer>
          <span style={{ fontSize: "30px" }}>🚩</span>
          <Text size={20} strong>
            개설
          </Text>
          <Text size={18}>한 모임</Text>
        </TitleContainer>
        <GatherListContainer>
          <GatherList gatherData={makeData} page="MyGather" />
        </GatherListContainer>
      </MakeContainer>
    </Container>
  );
};

export default MyGather;
