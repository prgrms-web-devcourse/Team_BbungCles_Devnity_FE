import randomUsers from "../../../fixtures/userList";
import UserList from "./UserList";

const UserListContainer = () => {
  // TODO: 모킹 데이터이므로 API 연동이 완료되면 API 데이터로 교체한다.
  const users = Array.from({ length: 10 }, () => randomUsers());

  return <UserList users={users} />;
};

export default UserListContainer;
