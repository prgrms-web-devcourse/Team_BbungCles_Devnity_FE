import { useQuery } from "react-query";
import { requestCheckValidLink } from "../utils/apis/admin";

const useQueryCheckValidLink = (linkUuid) => {
  return useQuery("checkValidLink", () => requestCheckValidLink(linkUuid), {
    enabled: false,
    retry: false,
  });
};

export default useQueryCheckValidLink;
