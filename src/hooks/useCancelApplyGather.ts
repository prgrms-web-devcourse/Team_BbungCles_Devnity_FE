import { useMutation } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestDeleteCancelAppliedGather } from "../utils/apis/gather";

const useCancelAppliedGather = () => {
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (gatherId) => requestDeleteCancelAppliedGather(gatherId),
    {
      onSuccess: () => {
        // TODO:
        // eslint-disable-next-line no-alert
        alert("신청이 취소되었습니다.");
      },
      onError: ({ response }) => {
        const errorMessage = response?.data?.message;
        // TODO:
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return { cancelAppliedGather: mutate };
};

export default useCancelAppliedGather;
