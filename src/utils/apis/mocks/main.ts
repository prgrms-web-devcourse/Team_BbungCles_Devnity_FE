import unnecessaryAuthAxiosInstance from "../unnecessaryAuthAxiosInstance";

const url = {
  USER_SUGGESTIONS:
    "https://run.mocky.io/v3/6227f610-3ea1-4180-8d5c-8bd9dfa0584f",
  GATHER_SUGGESTIONS:
    "https://run.mocky.io/v3/b7b8a3fd-b9b3-4c63-84da-99a2d4e77a71",
};

export const requestGetUserSuggestions = () => {
  return unnecessaryAuthAxiosInstance.get(url.USER_SUGGESTIONS);
};

export const requestGetGatherSuggestions = () => {
  return unnecessaryAuthAxiosInstance.get(url.GATHER_SUGGESTIONS);
};
