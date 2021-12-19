import { useParams } from "react-router-dom";
import useApplyGather from "../../hooks/useApplyGather";
import useCancelAppliedGather from "../../hooks/useCancelApplyGather";
import useGetGatherDetail from "../../hooks/useGetGatherDetail";
import { common } from "../../constants";
import GatherDetail from "./GatherDetail";
import useDeleteGather from "../../hooks/useDeleteGather";
import useEditGatherDetail from "../../hooks/useEditGatherDetail";
import useClosGather from "../../hooks/useCloseGather";

const GatherDetailContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetGatherDetail(id);

  const { cancelAppliedGather } = useCancelAppliedGather();
  const { applyGather } = useApplyGather();
  const { deleteGather } = useDeleteGather();
  const { editGather } = useEditGatherDetail();
  const { closeGather } = useClosGather();

  const handleGatherDelete = (gatherId) => {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-restricted-globals
    if (confirm(common.message.CONFIRM_DELETE)) {
      deleteGather(gatherId);
    }
  };

  const handleGatherClose = (gatherId) => {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-restricted-globals
    if (confirm(common.message.CONFIRM_MODIFY)) {
      closeGather(gatherId);
    }
  };

  const handleGatherApply = (gatherId) => {
    applyGather(gatherId);
  };

  const handleGatherCancel = (gatherId) => {
    cancelAppliedGather(gatherId);
  };

  const handleGatherDetailEdit = (editValue) => {
    editGather(editValue);
  };

  return (
    <div>
      {data ? (
        <GatherDetail
          gatherData={data?.data}
          handleGatherApply={handleGatherApply}
          handleGatherCancel={handleGatherCancel}
          handleGatherClose={handleGatherClose}
          handleGatherDelete={handleGatherDelete}
          handleGatherDetailEdit={handleGatherDetailEdit}
        />
      ) : null}
    </div>
  );
};

export default GatherDetailContainer;
