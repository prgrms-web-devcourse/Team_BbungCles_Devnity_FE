import { useCallback, useState } from "react";
import { Position } from "../types/commonTypes";

const useMapClick = (): [typeof position, typeof click, typeof initialize] => {
  const [position, setPosition] = useState<Position>({
    lat: null,
    lng: null,
  });

  const click = useCallback(
    (target: kakao.maps.Map, mouseEvent: kakao.maps.event.MouseEvent) => {
      setPosition({
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      });
    },
    []
  );

  const initialize = useCallback(() => {
    setPosition({
      lat: null,
      lng: null,
    });
  }, []);

  return [position, click, initialize];
};

export default useMapClick;
