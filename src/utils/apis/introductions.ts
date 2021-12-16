import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestGetFilteredUsers = (filters) => {
  return necessaryAuthAxiosInstance.get("v1/introductions", {
    params: {
      name: filters.name ?? null,
      generation: filters.generation ?? null,
      course: filters.course ?? null,
      role: filters.role ?? null,
      nextLastId: filters.nextLastId ?? null,
      size: filters.size ?? null,
    },
  });
};

export const requestGetIntroductions = (id) => {
  return necessaryAuthAxiosInstance.get(`v1/introductions/${id}`);
};

export const requestUserDetailWriteComment = (values) => {
  return necessaryAuthAxiosInstance.post(
    `v1/introductions/${values.introductionId}/comments`,
    {
      parentId: values.parentId,
      content: values.content,
    }
  );
};

export const requestUserLike = (introductionId) => {
  return necessaryAuthAxiosInstance.post(
    `v1/introductions/${introductionId}/like`
  );
};

export const requestUserDeleteLike = (introductionId) => {
  return necessaryAuthAxiosInstance.delete(
    `v1/introductions/${introductionId}/like`
  );
};

export const requestUserDeleteComment = (values) => {
  return necessaryAuthAxiosInstance.delete(
    `v1/introductions/${values.introductionId}/comments/${values.commentId}`
  );
};

export const requestUserModifyComment = (values) => {
  return necessaryAuthAxiosInstance.patch(
    `v1/introductions/${values.introductionId}/comments/${values.commentId}`,
    {
      content: values.content,
    }
  );
};
