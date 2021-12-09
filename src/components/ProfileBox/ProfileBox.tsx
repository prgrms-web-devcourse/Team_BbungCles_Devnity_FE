import styled from "@emotion/styled";
import theme from "../../assets/theme";
import Text from "../base/Text";

interface Props {
  src: string;
  alt?: string;
  size?: string;
  fontSize?: string;
  name: string;
  course: string;
  generation: number;
}

type ProfileBoxType = Pick<Props, "size">;

export const ProfileBoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

export const Image = styled.img<ProfileBoxType>`
  width: ${(props) => props.size || "26px"};
  height: ${(props) => props.size || "26px"};
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  background-color: ${theme.colors.orange300};
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileBox = ({
  src,
  size,
  alt,
  fontSize,
  name,
  course,
  generation,
}: Props) => {
  return (
    <ProfileBoxWrapper>
      <Image src={src} alt={alt} size={size} />
      <Text fontSize={fontSize}>{name}</Text>
      <InfoWrapper>
        <Text fontSize={fontSize} color="white">
          {course} / {generation}기
        </Text>
      </InfoWrapper>
    </ProfileBoxWrapper>
  );
};

export default ProfileBox;
