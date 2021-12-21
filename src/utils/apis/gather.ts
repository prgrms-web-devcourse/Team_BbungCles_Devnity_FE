import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestPostCreateGather = (gatherContent) => {
  return necessaryAuthAxiosInstance.post("v1/gathers", gatherContent);
};

export const requestPostApplyGather = (gatherId) => {
  return necessaryAuthAxiosInstance.post(`v1/gathers/${gatherId}/apply`);
};

export const requestDeleteCancelAppliedGather = (gatherId) => {
  return necessaryAuthAxiosInstance.delete(`v1/gathers/${gatherId}/apply`);
};

export const requestGetGatherDetail = (gatherId) => {
  return necessaryAuthAxiosInstance.get(`v1/gathers/${gatherId}`);
};

export const requestGetFilteredGathers = (filters, pageParam) => {
  return necessaryAuthAxiosInstance.get("v1/gathers", {
    params: {
      title: filters.title ? filters.title : null,
      category: filters.category ? filters.category : null,
      lastId: pageParam !== null ? pageParam : null,
      size: filters.size ? filters.size : null,
    },
  });
};

export const requestCreateComment = (submitValue) => {
  return necessaryAuthAxiosInstance.post(
    `v1/gathers/${submitValue.gatherId}/comments`,
    {
      parentId: submitValue?.parentId,
      content: submitValue.content,
    }
  );
};

export const requestDeleteComment = (deleteValue) => {
  return necessaryAuthAxiosInstance.delete(
    `v1/gathers/${deleteValue.gatherId}/comments/${deleteValue.commentId}`
  );
};

export const requestEditComment = (editValue) => {
  return necessaryAuthAxiosInstance.patch(
    `v1/gathers/${editValue.gatherId}/comments/${editValue.commentId}`,
    {
      content: editValue.content,
    }
  );
};

export const requestDeleteGather = (gatherId) => {
  return necessaryAuthAxiosInstance.delete(`v1/gathers/${gatherId}`);
};

export const requestEditGatherDetail = (editValue) => {
  return necessaryAuthAxiosInstance.patch(`v1/gathers/${editValue.gatherId}`, {
    title: editValue.title,
    content: editValue.content,
    category: editValue.category,
    deadline: editValue.deadline,
  });
};

export const requestCloseGather = (gatherId) => {
  return necessaryAuthAxiosInstance.patch(`v1/gathers/${gatherId}/close`);
};

export const requestGetMyCreatedGather = () => {
  return necessaryAuthAxiosInstance.get("v1/users/me/host");
};

export const requestGetMyAppliedGather = () => {
  return necessaryAuthAxiosInstance.get("v1/users/me/applicant");
};
