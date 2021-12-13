import useUsersSuggest from "../../hooks/useUsersSuggest";
import Main from "./Main";

const MainContainer = () => {
  const { data } = useUsersSuggest();

  return <Main usersSuggest={data} />;
};

export default MainContainer;
