import { useQuery } from "react-query";
import { requestGetInviteLink } from "../utils/apis/admin";

const useQueryInviteLink = () => {
  return useQuery("inviteLink", () => requestGetInviteLink(), {
    retry: false,
  });
};

export default useQueryInviteLink;
