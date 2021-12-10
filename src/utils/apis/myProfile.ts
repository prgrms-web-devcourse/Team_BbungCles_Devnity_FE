import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestGetMyProfile = () => {
  return necessaryAuthAxiosInstance.get("v1/users/me");
};

export const requestPutMyProfile = (values) => {
  return necessaryAuthAxiosInstance.put(
    `v1/users/me/introduction/${values.introductionId}`,
    values
  );
};

export const requestProfileImage = (imageFile) => {
  const form = new FormData();
  form.append("profileImage", imageFile);

  return necessaryAuthAxiosInstance.post("v1/media/image/profile", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
