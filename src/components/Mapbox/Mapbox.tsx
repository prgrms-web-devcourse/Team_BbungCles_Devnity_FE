import { ReactNode, useCallback, useRef } from "react";
import { Map } from "react-kakao-maps-sdk";
import {
  ImageMarker,
  ImageMarkerOverlay,
  Mapgakco,
  Marker,
  Position,
} from "../../types/mapTypes";
import {
  addControl,
  addImageMarker,
  addImageMarkerOverlay,
  addMarkerFromPosition,
  removeOverlay,
} from "../../utils/map";
import { addMapgakcoOverlay } from "../../utils/map/overlay";
import { keywordSearch } from "../../utils/map/place";

import "./customOverlayMarker.scss";
import "./imageMarker.scss";
import "./mapgakcoOverlay.scss";

interface Props {
  center: Position;
  isPanto?: boolean;
  hasControl?: boolean;
  hasCenterMarker?: boolean;
  userImageUrl?: string;
  keyword?: string;
  markers?: Marker[];
  imageMarkers?: ImageMarker[];
  imageMarkerOverlays?: ImageMarkerOverlay[];
  mapgakcos?: Mapgakco[];
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
  hasControl = true,
  hasCenterMarker = false,
  userImageUrl = "",
  keyword = "",
  markers = [],
  imageMarkers = [],
  imageMarkerOverlays = [],
  mapgakcos = [],
  style,
  children,
  onCenterChanged,
  onClick,
}: Props) => {
  const memoMap = useRef(null);
  const memoImageMarkerOverlays = useRef<kakao.maps.CustomOverlay[]>([]);
  const memoMapgakcos = useRef<kakao.maps.CustomOverlay[]>([]);

  const MapStyle = {
    width: "100%",
    height: "100%",
    ...style,
  };

  const handleCreate = useCallback(
    (map: kakao.maps.Map) => {
      memoMap.current = map;

      memoImageMarkerOverlays.current.forEach((overlay) => {
        removeOverlay(overlay);
      });

      memoImageMarkerOverlays.current = [];

      memoMapgakcos.current.forEach((overlay) => {
        removeOverlay(overlay);
      });

      memoMapgakcos.current = [];

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
        memoImageMarkerOverlays.current.push(
          addImageMarkerOverlay({ map, position, imageUrl, options })
        );
      });

      mapgakcos.forEach((mapgakco) => {
        memoMapgakcos.current.push(addMapgakcoOverlay({ map, mapgakco }));
      });

      hasCenterMarker &&
        addImageMarkerOverlay({
          map,
          position: center,
          imageUrl: userImageUrl,
        });

      keywordSearch(map, keyword);
    },
    [
      center,
      hasCenterMarker,
      hasControl,
      imageMarkerOverlays,
      imageMarkers,
      keyword,
      mapgakcos,
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
