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

  // TODO: ScrollHorizontal의 자식 요소는 배열이 와야 하므로 강제로 아래와 같이 변경했는데 옳지 않은 해결 방식인 것 같음. 수정 필요
  const userInfoList = [
    <div style={{ display: "flex", width: "110vw" }} key={0}>
      {userInfos?.map((userInfo) => (
        <li key={userInfo.user.userId}>
          <UserCard
            userInfo={userInfo}
            onClick={handleUserCardClick(userInfo.introduction.introductionId)}
          />
        </li>
      ))}
    </div>,
  ];

  return (
    <div>
      {(userInfos || []).length ? (
        <ul>
          <ScrollHorizontal
            reverseScroll
            style={{
              display: "flex",
              gap: "20px",
              height: "100%",
              paddingLeft: "4px",
            }}
          >
            {userInfoList}
          </ScrollHorizontal>
        </ul>
      ) : (
        <Text>자기소개 목록이 없습니다.</Text>
      )}
    </div>
  );
};

export default UserCardList;
