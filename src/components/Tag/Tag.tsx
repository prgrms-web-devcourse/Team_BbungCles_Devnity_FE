import styled from "@emotion/styled";
import {
  tagMap,
  TagMapKeyType,
  TagMapMbtiKeyType,
  TagMapRoleKeyType,
} from "../../constants";
import Text from "../base/Text";

interface Props {
  name: TagMapKeyType;
  value: TagMapRoleKeyType | TagMapMbtiKeyType;
  size?: number;
}

const Container = styled.div<Props>`
  background-color: ${({ name, value, theme }) => theme.colors[name][value]};
  color: black;
  padding: 4px 8px 2px;
  border-radius: 4px;
`;

const Tag = ({ name, value, size }: Props) => {
  return (
    <Container name={name} value={value} data-testid="tag-container">
      <Text size={size}>{tagMap[name][value]}</Text>
    </Container>
  );
};

export default Tag;
