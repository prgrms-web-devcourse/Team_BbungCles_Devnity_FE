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

export const requestGetFilteredGathers = (filters) => {
  return necessaryAuthAxiosInstance.get(
    `v1/gathers?category=${filters.category}&lastId=${filters.lastId}&size=${filters.size}`
  );
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
