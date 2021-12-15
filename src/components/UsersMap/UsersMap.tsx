import { UserMapInfo } from "../../../fixtures/userMapInfo";
import { common } from "../../constants";
import { Position } from "../../types/commonTypes";
import Mapbox from "../Mapbox/Mapbox";

interface Props {
  center: Position;
  userImageUrl: string;
  userMapInfos?: UserMapInfo[];
}

const UsersMap = ({ center, userImageUrl, userMapInfos }: Props) => {
  const imageMarkerOverlays = userMapInfos.map((userMapInfo) => {
    const position = {
      lat: userMapInfo?.latitude,
      lng: userMapInfo?.longitude,
    };

    const imageUrl = userMapInfo.profileImgUrl;

    const options = {
      color: "blue",
      text: userMapInfo.name,
    };

    return { position, imageUrl, options };
  });

  return (
    <Mapbox
      center={{ lat: center.lat, lng: center.lng }}
      userImageUrl={userImageUrl || common.placeHolderImageSrc}
      imageMarkerOverlays={imageMarkerOverlays}
    />
  );
};

export default UsersMap;
