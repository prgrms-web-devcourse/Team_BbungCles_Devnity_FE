import { useRecoilValue } from "recoil";
import { globalMyProfile } from "../../atoms/user";
import { common } from "../../constants";
import UsersMap from "./UsersMap";

const UsersMapContainer = () => {
  const currentUser = useRecoilValue(globalMyProfile);

  const center = {
    lat: currentUser?.introduction?.latitude || common.defaultPosition.lat,
    lng: currentUser?.introduction?.longitude || common.defaultPosition.lng,
  };

  return <UsersMap center={center} currentUser={currentUser} />;
};

export default UsersMapContainer;
