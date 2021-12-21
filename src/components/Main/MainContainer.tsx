import useGatherSuggestions from "../../hooks/useGatherSuggestions";
import useUserSuggestions from "../../hooks/useUserSuggetions";
import Main from "./Main";

const MainContainer = () => {
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
