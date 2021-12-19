/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useCallback } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { Position } from "../../types/commonTypes";

/* eslint-disable jsx-a11y/no-static-element-interactions */
interface Props {
  position: Position;
  text: string;
  onClick: () => void;
}

const MapgakcoMarker = ({ position, text, onClick }: Props) => {
  const handleClick = useCallback(
    () => (event: React.MouseEvent) => {
      event.preventDefault();
    },
    []
  );

  return (
    <>
      <MapMarker position={{ lat: position.lat, lng: position.lng }} />
      <CustomOverlayMap
        clickable
        position={{ lat: position.lat, lng: position.lng }}
        yAnchor={0.0}
      >
        <div className="customoverlay" onClick={onClick}>
          <a href="#" onClick={handleClick}>
            <span className="title">{text}</span>
          </a>
        </div>
      </CustomOverlayMap>
    </>
  );
};

export default MapgakcoMarker;
