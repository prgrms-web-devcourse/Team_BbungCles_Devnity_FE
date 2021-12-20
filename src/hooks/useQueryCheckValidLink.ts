import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { routes } from "../constants";
import { requestCheckValidLink } from "../utils/apis/admin";

const useQueryCheckValidLink = (linkUuid) => {
  const history = useHistory();

  return useQuery("checkValidLink", () => requestCheckValidLink(linkUuid), {
    onError: () => {
      history.push(routes.LOGIN);
    },
    enabled: false,
    retry: false,
  });
};

export default useQueryCheckValidLink;
