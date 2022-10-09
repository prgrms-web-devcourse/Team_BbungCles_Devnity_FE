import { useRecoilValue } from "recoil";
import useGatherSuggestions from "../../hooks/useGatherSuggestions";
import useUserSuggestions from "../../hooks/useUserSuggetions";
import Main from "./Main";
import { authState } from "../../atoms/auth";

const MainContainer = () => {
  const auth = useRecoilValue(authState);

  if (auth === "GUEST") {
    return <Main userSuggestions={[]} gatherSuggestions={[]} />;
  }

  const { data: userSuggestions } = useUserSuggestions();
  const { data: gatherSuggestions } = useGatherSuggestions();

  return (
    <Main
      userSuggestions={userSuggestions}
      gatherSuggestions={gatherSuggestions}
    />
  );
};

export default MainContainer;
