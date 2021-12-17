import styled from "@emotion/styled";
import { BsFillEyeFill } from "react-icons/bs";
import { breakpoints } from "../../assets/media";
import Text from "../base/Text";

interface Props {
  view: number;
  iconSize?: string | number;
  iconColor?: string;
  fontSize?: number;
  fontColor?: string;
}

const Container = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  ${breakpoints.maxMobile} {
    display: none;
  }
`;

const ViewText = ({
  view,
  iconSize = 12,
  iconColor,
  fontSize,
  fontColor,
}: Props) => {
  return (
    <Container>
      <BsFillEyeFill size={iconSize} color={iconColor} />
      <Text size={fontSize} color={fontColor}>{`${view}`}</Text>
    </Container>
  );
};

export default ViewText;
