import { useRecoilValue } from "recoil";
import { currentUserState } from "../../atoms/user";
import useUsersSuggest from "../../hooks/useUsersSuggest";
import Main from "./Main";

const MainContainer = () => {
  const currentUser = useRecoilValue(currentUserState);
  const { data: usersSuggest } = useUsersSuggest();

  return <Main currentUser={currentUser} usersSuggest={usersSuggest} />;
};

export default MainContainer;
