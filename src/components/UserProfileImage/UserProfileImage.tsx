import { common } from "../../constants";
import { isValidImageSrc } from "../../utils/validator";
import Image from "../base/Image";

interface Style {
  [key: string]: string;
}
interface Props {
  imageUrl: string;
  title?: string;
  size?: number;
  style?: Style;
}

const UserProfileImage = ({ imageUrl, title, size, style }: Props) => {
  const imageStyle = {
    border: "2px solid white",
    boxSizing: "content-box",
    ...style,
  };

  return (
    <Image
      src={isValidImageSrc(imageUrl) ? imageUrl : common.placeHolderImageSrc}
      width={size || 32}
      height={size || 32}
      title={title}
      borderRadius="50%"
      style={imageStyle}
      alt="유저 프로필 이미지"
      mode="cover"
    />
  );
};

export default UserProfileImage;
