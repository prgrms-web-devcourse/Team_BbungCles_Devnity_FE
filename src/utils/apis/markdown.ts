import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestMedia = (mediaFile) => {
  const form = new FormData();
  form.append("media", mediaFile);

  return necessaryAuthAxiosInstance.post("v1/medcccxccxia", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
