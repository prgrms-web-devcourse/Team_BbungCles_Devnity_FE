import { useParams } from "react-router-dom";
import useIntroduction from "../../hooks/useIntroduction";
import UserDetail from "./UserDetail";

const UserDetailContainer = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data: userInfo, isLoading } = useIntroduction(userId);

  return <UserDetail userInfo={userInfo} isLoading={isLoading} />;
};

export default UserDetailContainer;
