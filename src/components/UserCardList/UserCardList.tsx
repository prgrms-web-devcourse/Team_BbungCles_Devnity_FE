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
    <div>
      {(userInfos || []).length ? (
        <ul>
          <ScrollHorizontal
            reverseScroll
            style={{ display: "flex", gap: "20px", height: "100%" }}
          >
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
          </ScrollHorizontal>
        </ul>
      ) : (
        <Text>자기소개 목록이 없습니다.</Text>
      )}
    </div>
  );
};

export default UserCardList;
