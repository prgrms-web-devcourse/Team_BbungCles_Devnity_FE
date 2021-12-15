import unnecessaryAuthAxiosInstance from "../unnecessaryAuthAxiosInstance";

const url = {
  USER_SUGGESTIONS:
    "https://run.mocky.io/v3/6227f610-3ea1-4180-8d5c-8bd9dfa0584f",
  GATHER_SUGGESTIONS:
    "https://run.mocky.io/v3/f6cf1527-8da1-4cc0-8e7a-c4fac88e92bb",
};

export const requestGetUserSuggestions = () => {
  return unnecessaryAuthAxiosInstance.get(url.USER_SUGGESTIONS);
};

export const requestGetGatherSuggestions = () => {
  return unnecessaryAuthAxiosInstance.get(url.GATHER_SUGGESTIONS);
};
