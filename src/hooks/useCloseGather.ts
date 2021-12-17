import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestCloseGather } from "../utils/apis/gather";

const useClosGather = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (gatherId) => requestCloseGather(gatherId),
    {
      onSuccess: () => {
        // TODO:
        // eslint-disable-next-line no-alert
        queryClient.invalidateQueries("gatherDetail");
        alert("모집이 마감되었습니다.");
      },
      onError: ({ response }) => {
        const errorMessage = response?.data?.message;
        // TODO:
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return { closeGather: mutate };
};

export default useClosGather;
