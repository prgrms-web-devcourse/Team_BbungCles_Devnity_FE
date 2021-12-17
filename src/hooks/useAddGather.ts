import { useMutation } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestPostCreateGather } from "../utils/apis";

const useAddGather = () => {
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (values) => requestPostCreateGather(values),
    {
      onSuccess: () => {
        // eslint-disable-next-line no-alert
        alert("모집글이 등록되었습니다.");
      },
      onError: ({ response }) => {
        const errorMessage = response?.data?.message;
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );
  return { addGather: mutate };
};

export default useAddGather;
