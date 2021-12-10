import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { Container, DropdownWrapper, ImageWrapper } from "./styles";

interface Props {
  imageUrl: string;
  isTriggered: boolean;
  onImageClick: (event: React.MouseEvent) => void;
  onLinkClick: (link: string) => void;
}

const UserImageAndDropdown = ({
  imageUrl,
  isTriggered,
  onImageClick,
  onLinkClick,
}: Props) => {
  return (
    <Container>
      <ImageWrapper onClick={onImageClick}>
        <UserProfileImage imageUrl={imageUrl} />
      </ImageWrapper>
      <DropdownWrapper>
        <UserDropdownMenu isTriggered={isTriggered} onLinkClick={onLinkClick} />
      </DropdownWrapper>
    </Container>
  );
};

export default UserImageAndDropdown;
