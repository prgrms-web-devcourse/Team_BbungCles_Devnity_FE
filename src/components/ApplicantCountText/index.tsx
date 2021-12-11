import styled from "@emotion/styled";
import { BsFillPersonFill } from "react-icons/bs";
import Text from "../base/Text";

interface Props {
  applicantCount: number;
  applicantLimit: number;
  iconSize?: string | number;
  iconColor?: string;
  fontSize?: number;
  fontColor?: string;
}

const Container = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const ApplicantCountText = ({
  applicantCount,
  applicantLimit,
  iconSize = 14,
  iconColor,
  fontSize,
  fontColor,
}: Props) => {
  return (
    <Container>
      <BsFillPersonFill size={iconSize} color={iconColor} />
      <Text
        size={fontSize}
        color={fontColor}
      >{`${applicantCount} / ${applicantLimit}명`}</Text>
    </Container>
  );
};

export default ApplicantCountText;
