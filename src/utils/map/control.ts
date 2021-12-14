let mapTypeControl = null;
let zoomControl = null;

export const addControl = (map: kakao.maps.Map) => {
  if (!mapTypeControl) {
    mapTypeControl = new kakao.maps.MapTypeControl();
  }

  if (!zoomControl) {
    zoomControl = new kakao.maps.ZoomControl();
  }

  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
};
