// TODO: API 연동 후 콘솔창은 지울 예정이다.
/* eslint-disable no-console */

import { useParams } from "react-router-dom";
import useApplyGather from "../../hooks/useApplyGather";
import useCancelAppliedGather from "../../hooks/useCancelApplyGather";
import useGetGatherDetail from "../../hooks/useGetGatherDetail";

import GatherDetail from "./GatherDetail";
import useCreateGatherComment from "../../hooks/useCreateGatherComment";
import useDeleteGather from "../../hooks/useDeleteGather";
import useDeleteComment from "../../hooks/useDeleteComment";
import useEditComment from "../../hooks/useEditComment";

const GatherDetailContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetGatherDetail(id);

  console.log(data);

  const { cancelAppliedGather } = useCancelAppliedGather();
  const { applyGather } = useApplyGather();
  const { createComment } = useCreateGatherComment();
  const { deleteGather } = useDeleteGather();
  const { deleteComment } = useDeleteComment();
  const { editComment } = useEditComment();

  // TODO: API 호출 로직 작성 필요

  const handleGatherDelete = (gatherId) => {
    console.log("모임 삭제", gatherId);
    deleteGather(gatherId);
  };

  const handleGatherClose = (gatherId) => {
    console.log("모임 마감", gatherId);
  };

  const handleGatherApply = (gatherId) => {
    applyGather(gatherId);
    console.log("모임 신청", gatherId);
  };

  const handleGatherCancel = (gatherId) => {
    cancelAppliedGather(gatherId);

    console.log("모임 취소", gatherId);
  };

  const handleCommentSubmit = (submitValue) => {
    console.log("댓글 등록", submitValue);
    createComment(submitValue);
  };

  const handleCommentDelete = (deleteValue) => {
    console.log("댓글 삭제", deleteValue);
    deleteComment(deleteValue);
  };

  const handleCommentEdit = (editValue) => {
    console.log("댓글 수정", editValue);
    editComment(editValue);
  };

  return (
    <div>
      {data ? (
        <GatherDetail
          gatherData={data?.data}
          handleCommentDelete={handleCommentDelete}
          handleCommentEdit={handleCommentEdit}
          handleGatherApply={handleGatherApply}
          handleCommentSubmit={handleCommentSubmit}
          handleGatherCancel={handleGatherCancel}
          handleGatherClose={handleGatherClose}
          handleGatherDelete={handleGatherDelete}
        />
      ) : undefined}
    </div>
  );
};

export default GatherDetailContainer;
