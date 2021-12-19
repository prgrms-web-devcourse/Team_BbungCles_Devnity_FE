import styled from "@emotion/styled";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import Text from "../base/Text";

interface Props {
  createdDate?: string;
  deadLine?: string;
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

const PeriodText = ({
  createdDate,
  deadLine,
  iconSize = 12,
  iconColor,
  fontSize,
  fontColor,
}: Props) => {
  return (
    <Container>
      <BsFillCalendar2EventFill size={iconSize} color={iconColor} />
      {createdDate && deadLine ? (
        <Text
          size={fontSize}
          color={fontColor}
        >{`${createdDate} ~ ${deadLine}`}</Text>
      ) : (
        <Text size={fontSize} color={fontColor}>
          {deadLine || createdDate}
        </Text>
      )}
    </Container>
  );
};

export default PeriodText;
