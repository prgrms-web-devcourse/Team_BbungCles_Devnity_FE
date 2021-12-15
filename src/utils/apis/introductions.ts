import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestGetFilteredUsers = (filters) => {
  return necessaryAuthAxiosInstance.get("v1/introductions", {
    params: {
      name: filters.name ? filters.name : null,
      generation: filters.generation ? filters.generation : null,
      course: filters.course ? filters.course : null,
      role: filters.role ? filters.role : null,
      nextLastId: filters.nextLastId ? filters.nextLastId : null,
      size: filters.size ? filters.size : null,
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

export const requestUserLike = (nextLastId) => {
  return necessaryAuthAxiosInstance.post(`v1/introductions/${nextLastId}/like`);
};
