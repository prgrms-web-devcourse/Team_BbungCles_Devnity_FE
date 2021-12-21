import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestMakeInviteLink } from "../utils/apis/admin";
import useCustomToast from "./useCustomToast";

const useMutationInviteLink = () => {
  const queryClient = useQueryClient();

  const [toast] = useCustomToast();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "makeInviteLink",
    (valuse) => requestMakeInviteLink(valuse),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inviteLink");
        toast({ message: "링크 생성이 완료되었습니다 😄" });
      },
    }
  );
};

export default useMutationInviteLink;
