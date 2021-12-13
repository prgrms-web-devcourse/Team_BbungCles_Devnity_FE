import unnecessaryAuthAxiosInstance from "../apis/unnecessaryAuthAxiosInstance";

const mockURL = "https://run.mocky.io/v3/df9ab2e7-4c5f-46be-be63-c4d9e60a1adc";

export const requestGetUsersSuggest = () => {
  return unnecessaryAuthAxiosInstance.get(mockURL);
};
