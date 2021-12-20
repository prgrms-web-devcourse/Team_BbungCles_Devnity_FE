import { common } from "../../constants";
import { Position } from "../../types/commonTypes";
import { ResponseUserLocation } from "../../types/userLocation";
import Mapbox from "../Mapbox/Mapbox";

interface Props {
  center: Position;
  userImageUrl: string;
  usersLocations?: ResponseUserLocation[];
}

const UsersMap = ({ center, userImageUrl, usersLocations }: Props) => {
  const imageMarkerOverlays = (usersLocations || []).map((userLocation) => {
    const position = {
      lat: userLocation?.latitude,
      lng: userLocation?.longitude,
    };

    const imageUrl = userLocation.profileImgUrl;

    const options = {
      color: "blue",
      text: userLocation.name,
    };

    return { position, imageUrl, options };
  });

  return (
    <Mapbox
      center={{ lat: center.lat, lng: center.lng }}
      hasCenterMarker
      userImageUrl={userImageUrl || common.placeHolderImageSrc}
      imageMarkerOverlays={imageMarkerOverlays}
    />
  );
};

export default UsersMap;
