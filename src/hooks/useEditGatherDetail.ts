import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestEditGatherDetail } from "../utils/apis/gather";

const useEditGatherDetail = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (editValue) => requestEditGatherDetail(editValue),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("gatherDetail");
        // TODO:
        // eslint-disable-next-line no-alert
        alert("모집글이 수정되었습니다.");
      },
      onError: ({ response }) => {
        const errorMessage = response?.data?.message;
        // TODO:
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return { editGather: mutate };
};

export default useEditGatherDetail;
