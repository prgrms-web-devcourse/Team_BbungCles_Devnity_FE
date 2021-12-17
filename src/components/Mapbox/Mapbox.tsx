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
  addMarkerFromPosition,
} from "../../utils/map";
import { keywordSearch } from "../../utils/map/place";

import "./index.scss";

interface Props {
  center: Position;
  isPanto?: boolean;
  hasCenterMarker?: boolean;
  markers?: Marker[];
  imageMarkers?: ImageMarker[];
  imageMarkerOverlays?: ImageMarkerOverlay[];
  hasControl?: boolean;
  userImageUrl?: string;
  keyword?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onCenterChanged?: Function;
  onClick?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void;
}

const Mapbox = ({
  center,
  isPanto = false,
  hasCenterMarker = false,
  markers = [],
  imageMarkers = [],
  imageMarkerOverlays = [],
  hasControl = true,
  userImageUrl = "",
  keyword = "",
  style,
  children,
  onCenterChanged,
  onClick,
}: Props) => {
  const memoMap = useRef(null);

  const MapStyle = {
    width: "100%",
    height: "100%",
    ...style,
  };

  const handleCreate = useCallback(
    (map: kakao.maps.Map) => {
      memoMap.current = map;

      if (hasControl) {
        addControl(map);
      }

      markers.forEach(({ position }) => {
        addMarkerFromPosition({ map, position });
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

      // keyword search
      keywordSearch(map, keyword);
    },
    [
      center,
      hasCenterMarker,
      hasControl,
      imageMarkerOverlays,
      imageMarkers,
      keyword,
      markers,
      userImageUrl,
    ]
  );

  const handleCenterChanged = useCallback(
    (target: kakao.maps.Map) => {
      const currentCenter = target.getCenter();

      onCenterChanged &&
        onCenterChanged({
          lat: currentCenter.getLat(),
          lng: currentCenter.getLng(),
        });
    },
    [onCenterChanged]
  );

  return (
    <Map
      center={{ lat: center.lat, lng: center.lng }}
      isPanto={isPanto}
      style={MapStyle}
      onCreate={handleCreate}
      onCenterChanged={handleCenterChanged}
      onClick={onClick}
    >
      {children}
    </Map>
  );
};

export default Mapbox;
