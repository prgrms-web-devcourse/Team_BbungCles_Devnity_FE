import unnecessaryAuthAxiosInstance from "../unnecessaryAuthAxiosInstance";

const url = {
  USER_SUGGESTIONS:
    "https://run.mocky.io/v3/df9ab2e7-4c5f-46be-be63-c4d9e60a1adc",
  GATHER_SUGGESTIONS:
    "https://run.mocky.io/v3/f6cf1527-8da1-4cc0-8e7a-c4fac88e92bb",
};

export const requestGetUserSuggestions = () => {
  return unnecessaryAuthAxiosInstance.get(url.USER_SUGGESTIONS);
};

export const requestGetGatherSuggestions = () => {
  return unnecessaryAuthAxiosInstance.get(url.GATHER_SUGGESTIONS);
};
