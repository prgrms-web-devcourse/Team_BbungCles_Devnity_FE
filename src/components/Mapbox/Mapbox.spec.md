- [x] 특정한 위치가 중심점이 되도록 지도를 렌더링할 수 있다.
- [x] 좌표값 데이터를 지도 위에 마커로 표시할 수 있다.
- [x] 지도 컨트롤을 렌더링할 수 있다.

## 사용법

### 마커를 만드는 방법

함수를 사용하는 방법:

```tsx
import { useCallback } from "react";
import { Map } from "react-kakao-maps-sdk";
import { Marker, Position } from "../../types/MapTypes";
import { addMarker } from "../../utils/kakaoMap";

interface Props {
  center: Position;
  markers: Marker[];
}

const Mapbox = ({ center, markers }: Props) => {
  const MapStyle = {
    width: "100%",
    height: "100%",
  };

  const handleCreate = useCallback(
    (map: kakao.maps.Map) => {
      markers.forEach(({ position }) => {
        addMarker({ map, position });
      });
    },
    [hasControl, markers]
  );

  return (
    <Map
      center={{ lat: center.latitude, lng: center.longitude }}
      style={MapStyle}
      onCreate={handleCreate}
    ></Map>
  );
};

export default Mapbox;
```

리액트 컴포넌트를 사용하는 방법:

```tsx
import { useCallback } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Marker, Position } from "../../types/MapTypes";

interface Props {
  center: Position;
  markers: Marker[];
}

const Mapbox = ({ center, markers }: Props) => {
  const MapStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <Map
      center={{ lat: center.latitude, lng: center.longitude }}
      style={MapStyle}
    >
      {markers.map(({ position, title }) => (
        <MapMarker
          key={`${title}-${position}`}
          position={{ lat: position.latitude, lng: position.longitude }}
        >
          <div style={{ color: "#000" }}>{title}</div>
        </MapMarker>
      ))}
    </Map>
  );
};

export default Mapbox;
```
