import Image from "../base/Image";

interface Props {
  imageUrl: string;
}

const UserProfileImage = ({ imageUrl }: Props) => {
  return (
    <Image
      src={imageUrl}
      width={32}
      height={32}
      borderRadius="50%"
      style={{ border: "2px solid white", boxSizing: "content-box" }}
      alt="유저 프로필 이미지"
      mode="cover"
    />
  );
};

export default UserProfileImage;
