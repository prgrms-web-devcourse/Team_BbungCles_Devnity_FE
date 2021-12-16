import { ReactNode, useCallback, useRef } from "react";
import { Map } from "react-kakao-maps-sdk";
import {
  ImageMarker,
  ImageMarkerOverlay,
  Marker,
  Position,
} from "../../types/mapTypes";
import {
  addControl,
  addImageMarker,
  addImageMarkerOverlay,
  addMarker,
} from "../../utils/map";

import "./index.scss";

interface Props {
  center: Position;
  hasCenterMarker?: boolean;
  markers?: Marker[];
  imageMarkers?: ImageMarker[];
  imageMarkerOverlays?: ImageMarkerOverlay[];
  hasControl?: boolean;
  userImageUrl?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const Mapbox = ({
  center,
  hasCenterMarker = false,
  markers = [],
  imageMarkers = [],
  imageMarkerOverlays = [],
  hasControl = true,
  userImageUrl = "",
  style,
  children,
}: Props) => {
  const MapStyle = {
    width: "100%",
    height: "100%",
    ...style,
  };

  const memoMap = useRef(null);

  const handleCreate = useCallback(
    (map: kakao.maps.Map) => {
      memoMap.current = map;

      if (hasControl) {
        addControl(map);
      }

      markers.forEach(({ position }) => {
        addMarker({ map, position });
      });

      imageMarkers.forEach(({ position, imageUrl }) => {
        addImageMarker({ map, position, imageUrl });
      });

      imageMarkerOverlays.forEach(({ position, imageUrl, options }) => {
        addImageMarkerOverlay({ map, position, imageUrl, options });
      });

      hasCenterMarker &&
        addImageMarkerOverlay({
          map,
          position: center,
          imageUrl: userImageUrl,
        });
    },
    [
      center,
      hasCenterMarker,
      hasControl,
      imageMarkerOverlays,
      imageMarkers,
      markers,
      userImageUrl,
    ]
  );

  return (
    <Map
      center={{ lat: center.lat, lng: center.lng }}
      style={MapStyle}
      onCreate={handleCreate}
    >
      {children}
    </Map>
  );
};

export default Mapbox;
