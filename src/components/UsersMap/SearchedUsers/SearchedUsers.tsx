import { UserLocationModel } from "../../../types/userLocation";
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
      {usersLocations?.map((userLocation) => (
        <SearchedUserItem
          key={userLocation.userId}
          onClick={handleUserClick(userLocation)}
          onKeyPress={handleUserClick(userLocation)}
          role="presentation"
        >
          {userLocation.name}
        </SearchedUserItem>
      ))}
    </Container>
  );
};

export default SearchedUsers;
