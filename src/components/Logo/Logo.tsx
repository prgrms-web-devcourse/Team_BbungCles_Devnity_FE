import Button from "../base/OldButton";
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
    <Button onClick={onClick}>
      <Image
        width={width}
        height={height}
        borderRadius={borderRadius}
        src={imageUrl}
        mode="cover"
        alt="로고"
      />
    </Button>
  );
};

export default Logo;
