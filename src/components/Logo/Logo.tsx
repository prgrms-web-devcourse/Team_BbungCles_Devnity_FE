import IconButton from "../base/IconButton";
import Image from "../base/Image";

interface Props {
  width: number;
  height?: number;
  imageUrl: string;
  borderRadius?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const Logo = ({ width, height, imageUrl, borderRadius, onClick }: Props) => {
  return (
    <IconButton onClick={onClick}>
      <Image
        width={width}
        height={height}
        borderRadius={borderRadius}
        src={imageUrl}
        mode="cover"
        alt="로고"
      />
    </IconButton>
  );
};

export default Logo;
