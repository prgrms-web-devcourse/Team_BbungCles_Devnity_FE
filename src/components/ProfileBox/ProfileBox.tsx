import styled from "@emotion/styled";
import { breakpoints, gatherBreakpoints } from "../../assets/media";
import theme from "../../assets/theme";
import Text from "../base/Text";

interface Props {
  src?: string;
  alt?: string;
  size?: string;
  fontSize?: number;
  name: string;
  course: string;
  generation: number;
}

type ProfileBoxType = Pick<Props, "size">;

export const ProfileBoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  span {
    ${gatherBreakpoints.mobile} {
      font-size: 12px !important;
    }
  }
`;

export const Image = styled.img<ProfileBoxType>`
  width: ${(props) => props.size || "26px"};
  height: ${(props) => props.size || "26px"};
  border-radius: 50%;

  ${breakpoints.maxMobile} {
    display: none;
  }
`;

export const InfoWrapper = styled.div`
  background-color: ${theme.colors.orange300};
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    ${gatherBreakpoints.mobile} {
      font-size: 10px !important;
    }
  }
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
      {src && <Image src={src} alt={alt} size={size} />}
      <Text id="name" size={fontSize}>
        {name}
      </Text>
      <InfoWrapper>
        <Text id="info" size={fontSize - 2} color={theme.colors.white}>
          {`${course} / ${generation}기`}
        </Text>
      </InfoWrapper>
    </ProfileBoxWrapper>
  );
};

export default ProfileBox;
