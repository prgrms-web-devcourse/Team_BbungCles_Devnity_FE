import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestGetIntroductions = (id) => {
  // TODO: 백엔드 API 완성되면 mocky 제거
  // eslint-disable-next-line
  console.log(id);
  return necessaryAuthAxiosInstance.get(
    "https://run.mocky.io/v3/a8e50379-7737-4457-84b2-62d4a55562d4"
  );
  // return necessaryAuthAxiosInstance.get(`v1/introductions/${id}`);
};
