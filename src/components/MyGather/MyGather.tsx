import Text from "../base/Text";
import { GatherContainer, Container, TitleContainer } from "./styles";
import { GatherData } from "../GatherMain/GatherMain";
import GatherList from "../GatherList/GatherList";

interface Props {
  applyData: Array<GatherData>;
  registerData: Array<GatherData>;
}

const MyGather = ({ applyData, registerData }: Props) => {
  return (
    <Container>
      <GatherContainer>
        <TitleContainer>
          <Text size="20" strong>
            신청
          </Text>
          <Text size="18">한 모임</Text>
        </TitleContainer>
        <GatherList gatherData={applyData} />
      </GatherContainer>
      <GatherContainer>
        <TitleContainer>
          <Text size="20" strong>
            등록
          </Text>
          <Text size="18">한 모임</Text>
        </TitleContainer>
        <GatherList gatherData={registerData} />
      </GatherContainer>
    </Container>
  );
};

export default MyGather;
