import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestMapgakcoRegister = (values) => {
  return necessaryAuthAxiosInstance.post("v1/mapgakcos", values);
};

export const requestGetMapgakcos = () => {
  // TODO: API 명세에서는 get 요청으로 body를 보내야 하는데 axios.get에는 body를 보낼 수 없다. 이 문제가 해결되지 않아 일단 주석처리한다.
  // const {
  //   lastDistance,
  //   centerX,
  //   centerY,
  //   currentNEX,
  //   currentNEY,
  //   currentSWX,
  //   currentSWY,
  // } = values;

  return necessaryAuthAxiosInstance.get("v1/mapgakcos", {
    params: {
      lastDistance: 0.0,
      centerX: 37.566653033875774,
      centerY: 126.97876549797886,
      currentNEX: 37.57736394041695,
      currentNEY: 127.03009029300624,
      currentSWX: 37.55659510685803,
      currentSWY: 126.9430729297755,
    },
  });
};
