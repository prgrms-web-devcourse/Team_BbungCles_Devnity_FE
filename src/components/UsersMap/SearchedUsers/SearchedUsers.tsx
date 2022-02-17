import { UserLocationModel } from "../../../types/userLocation";
import Text from "../../base/Text";
import UserProfileImage from "../../UserProfileImage/UserProfileImage";
import { Container, SearchedUserItem } from "./SearchedUsers.styles";

interface Props {
  usersLocations: UserLocationModel[];
  onUserClick: (userLocation: UserLocationModel) => void;
}

const SearchedUsers = ({ usersLocations, onUserClick }: Props) => {
  const handleUserClick = (userLocation: UserLocationModel) => () => {
    onUserClick(userLocation);
  };

  return (
    <Container>
      {usersLocations?.map((userLocation: UserLocationModel) => (
        <SearchedUserItem
          key={userLocation.userId}
          onClick={handleUserClick(userLocation)}
          onKeyPress={handleUserClick(userLocation)}
          role="presentation"
        >
          <UserProfileImage
            title={userLocation.name}
            imageUrl={userLocation.profileImgUrl}
            size={20}
          />
          <Text size={14}>{userLocation.name}</Text>
        </SearchedUserItem>
      ))}
    </Container>
  );
};

export default SearchedUsers;
