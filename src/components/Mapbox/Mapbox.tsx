import { useCallback } from "react";
import { Map } from "react-kakao-maps-sdk";
import { Marker, Position } from "../../types/MapTypes";
import { addControl, addImageOverlayMarker, addMarker } from "../../utils/map";

import "./index.scss";

interface Props {
  center: Position;
  markers?: Marker[];
  hasControl?: boolean;
  userImageUrl?: string;
}

const Mapbox = ({
  center,
  markers = [],
  hasControl = true,
  userImageUrl = "",
}: Props) => {
  const MapStyle = {
    width: "100%",
    height: "100%",
  };

  const handleCreate = useCallback(
    (map: kakao.maps.Map) => {
      if (hasControl) {
        addControl(map);
      }

      markers.forEach(({ position }) => {
        addMarker({ map, position });
      });

      addMarker({ map, position: center });

      addImageOverlayMarker({
        map,
        position: center,
        imageUrl: userImageUrl,
      });
    },
    [center, hasControl, markers, userImageUrl]
  );

  return (
    <Map
      center={{ lat: center.latitude, lng: center.longitude }}
      style={MapStyle}
      onCreate={handleCreate}
    />
  );
};

export default Mapbox;
