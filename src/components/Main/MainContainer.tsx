import { useRecoilValue } from "recoil";
import { currentUserState } from "../../atoms/user";
import useGatherSuggestions from "../../hooks/useGatherSuggestions";
import useUserSuggestions from "../../hooks/useUserSuggetions";
import Main from "./Main";

const MainContainer = () => {
  const currentUser = useRecoilValue(currentUserState);
  const { data: userSuggestions } = useUserSuggestions();
  const { data: gatherSuggestions } = useGatherSuggestions();

  return (
    <Main
      currentUser={currentUser}
      userSuggestions={userSuggestions}
      gatherSuggestions={gatherSuggestions}
    />
  );
};

export default MainContainer;
