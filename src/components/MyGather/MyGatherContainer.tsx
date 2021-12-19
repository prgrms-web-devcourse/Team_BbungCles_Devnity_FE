import MyGather from "./MyGather";
import useMyPostingGather from "../../hooks/useMyPostingGather";
import useMyAppliedGather from "../../hooks/useMyAppliedGather";

const MyGatherContainer = () => {
  const { data: makeData } = useMyPostingGather();
  const { data: applyData } = useMyAppliedGather();

  return (
    <div>
      {applyData && makeData ? (
        <MyGather applyData={applyData} makeData={makeData} />
      ) : null}
    </div>
  );
};

export default MyGatherContainer;
