import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useIntroduction from "../../hooks/useIntroduction";
import UserDetail from "./UserDetail";

const UserDetailContainer = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data: userInfo, isLoading, isError } = useIntroduction(userId);

  const history = useHistory();

  useEffect(() => {
    // 에러 발생시 이전 페이지로 라우팅 시킨다.
    if (isError) {
      history.goBack();
    }
  }, [history, isError]);

  return <UserDetail userInfo={userInfo?.data.data} isLoading={isLoading} />;
};

export default UserDetailContainer;
