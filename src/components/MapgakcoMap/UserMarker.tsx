import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { Position } from "../../types/commonTypes";

interface Props {
  position: Position;
  imageUrl: string;
  text: string;
  color?: string;
}

const UserMarker = ({ position, imageUrl, text, color = "blue" }: Props) => {
  return (
    <CustomOverlayMap
      clickable
      position={{ lat: position.lat, lng: position.lng }}
      yAnchor={1}
    >
      <div className={`marker--${color}`}>
        <img className="marker__image" src={imageUrl} alt="유저 이미지" />
        <span className="marker__text">{text}</span>
      </div>
    </CustomOverlayMap>
  );
};

export default UserMarker;
