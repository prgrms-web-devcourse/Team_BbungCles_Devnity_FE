import { useParams } from "react-router-dom";
import { useState } from "react";
import useApplyGather from "../../hooks/useApplyGather";
import useCancelAppliedGather from "../../hooks/useCancelApplyGather";
import useGetGatherDetail from "../../hooks/useGetGatherDetail";
import { common } from "../../constants";
import GatherDetail from "./GatherDetail";
import useDeleteGather from "../../hooks/useDeleteGather";
import useEditGatherDetail from "../../hooks/useEditGatherDetail";
import useClosGather from "../../hooks/useCloseGather";
import Modal from "../base/Modal";
import GatherRegisterFormContainer from "../GatherRegisterForm/GatherRegistorFormContainer";

const GatherDetailContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetGatherDetail(id);

  const { cancelAppliedGather } = useCancelAppliedGather();
  const { applyGather } = useApplyGather();
  const { deleteGather } = useDeleteGather();
  const { editGather } = useEditGatherDetail();
  const { closeGather } = useClosGather();

  const [modalVisible, setModalVisible] = useState(false);

  const handleVisibleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleGatherDelete = (gatherId) => {
    // eslint-disable-next-line
    if (confirm(common.message.CONFIRM_DELETE)) {
      deleteGather(gatherId);
    }
  };

  const handleGatherClose = (gatherId) => {
    // eslint-disable-next-line
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

  return (
    <div>
      {data ? (
        modalVisible ? (
          <Modal
            width="60%"
            visible={modalVisible}
            onClose={() => handleVisibleModal()}
          >
            <GatherRegisterFormContainer
              onModalClose={() => handleVisibleModal()}
              editData={data?.data}
              submitForm={editGather}
            />
          </Modal>
        ) : (
          <GatherDetail
            gatherData={data?.data}
            handleGatherApply={handleGatherApply}
            handleGatherCancel={handleGatherCancel}
            handleGatherClose={handleGatherClose}
            handleGatherDelete={handleGatherDelete}
            handleVisibleModal={handleVisibleModal}
          />
        )
      ) : null}
    </div>
  );
};

export default GatherDetailContainer;
