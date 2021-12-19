import unnecessaryAuthAxiosInstance from "../unnecessaryAuthAxiosInstance";

const url = {
  GET_MAPGAKCOS: "https://run.mocky.io/v3/d5dc0739-764a-481b-9f3e-c92e2f6d8618",
  GET_MAPGAKCO_DETAIL:
    "https://run.mocky.io/v3/e4665cfd-f3a6-424c-8d9c-bd24a1e3037e",
};

export const requestGetMapgakcos = () => {
  return unnecessaryAuthAxiosInstance.get(url.GET_MAPGAKCOS);
};

export const requestGetMapgakcoDetail = (id: string) => {
  return unnecessaryAuthAxiosInstance.get(`${url.GET_MAPGAKCO_DETAIL}/${id}`);
};
