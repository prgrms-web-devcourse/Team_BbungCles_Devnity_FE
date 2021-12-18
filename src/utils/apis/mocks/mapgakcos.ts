import unnecessaryAuthAxiosInstance from "../unnecessaryAuthAxiosInstance";

const url = {
  GET_MAPGAKCOS: "https://run.mocky.io/v3/d5dc0739-764a-481b-9f3e-c92e2f6d8618",
};

export const requestGetMapgakcos = () => {
  return unnecessaryAuthAxiosInstance.get(url.GET_MAPGAKCOS);
};
