import { render } from "@testing-library/react";

import { center } from "../../../fixtures/map";

import Mapbox from "./Mapbox";

describe("Mapbox", () => {
  const setCenter = jest.fn;

  // TypeError: Cannot read properties of undefined (reading 'maps')
  window.kakao.maps.Map = jest.fn().mockImplementation(() => ({
    setCenter,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("특정한 위치가 중심점이 되도록 지도를 렌더링할 수 있다.", () => {
    render(<Mapbox center={center} />);

    expect(setCenter).toBeCalled();
  });
});
