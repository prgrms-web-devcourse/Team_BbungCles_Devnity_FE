import useHover from "../../hooks/useHover";
import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { Container, DropdownWrapper, ImageWrapper } from "./styles";

interface Props {
  imageUrl: string;
  onLinkClick: (link: string) => void;
}

const UserImageAndDropdown = ({ imageUrl, onLinkClick }: Props) => {
  const [ref, isHovered] = useHover();

  return (
    <Container>
      <ImageWrapper ref={ref}>
        <UserProfileImage imageUrl={imageUrl} />
      </ImageWrapper>
      <DropdownWrapper>
        <UserDropdownMenu isTriggered={isHovered} onLinkClick={onLinkClick} />
      </DropdownWrapper>
    </Container>
  );
};

export default UserImageAndDropdown;
