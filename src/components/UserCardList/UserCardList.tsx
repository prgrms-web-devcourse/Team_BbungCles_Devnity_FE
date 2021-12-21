import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import ScrollHorizontal from "react-scroll-horizontal";
import { UserInfo } from "../../types/userInfo";
import UserCard from "../UserCard/UserCard";
import Text from "../base/Text";
import { routes } from "../../constants";

interface Props {
  userInfos: UserInfo[];
}

const UserCardList = ({ userInfos }: Props) => {
  const history = useHistory();

  const handleUserCardClick = useCallback(
    (userId) => () => {
      history.push(`${routes.USERLIST}/${userId}`);
    },
    [history]
  );

  return (
    <ScrollHorizontal reverseScroll style={{ height: "100%" }}>
      <div>
        {(userInfos || []).length ? (
          <ul>
            {userInfos?.map((userInfo) => (
              <li key={userInfo.user.userId}>
                <UserCard
                  userInfo={userInfo}
                  onClick={handleUserCardClick(
                    userInfo.introduction.introductionId
                  )}
                />
              </li>
            ))}
          </ul>
        ) : (
          <Text>자기소개 목록이 없습니다.</Text>
        )}
      </div>
    </ScrollHorizontal>
  );
};

export default UserCardList;
