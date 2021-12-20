import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestMakeInviteLink } from "../utils/apis/admin";

const useMutationInviteLink = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "makeInviteLink",
    (valuse) => requestMakeInviteLink(valuse),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inviteLink");
      },
    }
  );
};

export default useMutationInviteLink;
