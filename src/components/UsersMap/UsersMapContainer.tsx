import { useRecoilValue } from "recoil";
import randomUserMapInfo from "../../../fixtures/userMapInfo";
import { currentUserState } from "../../atoms/user";
import { common } from "../../constants";
import UsersMap from "./UsersMap";

const UsersMapContainer = () => {
  const currentUser = useRecoilValue(currentUserState);

  const center = common.defaultPosition;

  const userImageUrl = currentUser?.introduction.profileImgUrl;

  const userMapInfos = Array.from({ length: 120 }, () => randomUserMapInfo());

  return (
    <UsersMap
      center={center}
      userImageUrl={userImageUrl}
      userMapInfos={userMapInfos}
    />
  );
};

export default UsersMapContainer;
