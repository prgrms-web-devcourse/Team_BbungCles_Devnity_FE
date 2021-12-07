import styled from "@emotion/styled";

interface Props {
  width: number;
  height?: number;
  imageUrl: string;
  borderRadius?: string;
  onClick?: (event: React.MouseEvent) => void;
}

type ImageType = Pick<Props, "width" | "height" | "borderRadius">;

// TODO: 이미지 컴포넌트와 같이 재사용성이 높은 "베이스" 컴포넌트는 팀원들과 논의하여 디렉토리 구조를 논의한 후에 분리한다.
const Image = styled.img<ImageType>`
  width: width;
  height: ${({ width, height }) => height || width};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const Logo = ({ width, height, imageUrl, borderRadius, onClick }: Props) => {
  return (
    <Image
      width={width}
      height={height}
      borderRadius={borderRadius}
      src={imageUrl}
      alt="로고"
      onClick={onClick}
    />
  );
};

export default Logo;
