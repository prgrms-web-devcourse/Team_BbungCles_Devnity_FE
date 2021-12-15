import { UserInfo } from "../../types/userInfo";
import UserCard from "../UserCard/UserCard";
import Text from "../base/Text";

interface Props {
  userInfos: UserInfo[];
}

const UserCardList = ({ userInfos }: Props) => {
  return (
    <div>
      {(userInfos || []).length ? (
        <ul>
          {userInfos?.map((userInfo) => (
            <li key={userInfo.user.userId}>
              <UserCard userInfo={userInfo} />
            </li>
          ))}
        </ul>
      ) : (
        <Text>자기소개 목록이 없습니다.</Text>
      )}
    </div>
  );
};

export default UserCardList;
