import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestPostCreateGather } from "../utils/apis";
import { routes } from "../constants";

const useAddGather = () => {
  const history = useHistory();
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (values) => requestPostCreateGather(values),
    {
      onSuccess: (data) => {
        // eslint-disable-next-line no-alert
        alert("모집글이 등록되었습니다.");
        const id = data?.data?.data?.gatherId;
        history.push(`${routes.GATHERLIST}/${id}`);
      },
    }
  );
  return { addGather: mutate };
};

export default useAddGather;
