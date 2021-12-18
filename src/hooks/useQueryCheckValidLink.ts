import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { common, routes } from "../constants";
import { requestCheckValidLink } from "../utils/apis/admin";
import useCustomToast from "./useCustomToast";

const useQueryCheckValidLink = (linkUuid) => {
  const history = useHistory();
  const [toast] = useCustomToast();

  return useQuery("checkValidLink", () => requestCheckValidLink(linkUuid), {
    onError: ({ response }) => {
      const errorMessage = response
        ? response.data.message
        : common.message.EXPIRE_OR_SERVER_ERROR;

      if (response) {
        history.push(routes.LOGIN);
        toast({ message: errorMessage });
      }
    },
    enabled: false,
    retry: false,
  });
};

export default useQueryCheckValidLink;
