// TODO: API 연동 후 콘솔창은 지울 예정이다.
/* eslint-disable no-console */
import useGatherApply from "../../hooks/useGatherApply";
import GatherDetail from "./GatherDetail";

const dummy = {
  gatherId: 1,
  category: "스터디",
  title: "자스 같이 공부해요",
  hostName: "박뿡치",
  hostCourse: "FE",
  hostProfile: "https://picsum.photos/200/400",
  hostGeneration: 1,
  createdDate: "2021-12-04",
  deadLine: "2021-12-11",
  view: 56,
  period: 20211212,
  applicantLimit: 8,
  applicantCount: 3,
  applicants: [
    {
      userId: "123",
      name: "뿡순이",
      course: "FE",
      generation: 1,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
    },
    {
      userId: "123",
      name: "뿡돌이",
      course: "BE",
      generation: 2,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
    },
    {
      userId: "123",
      name: "뿡뿡이",
      course: "FE",
      generation: 1,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
    },
  ],
  place: "강남역",
  content:
    "안녕하세요?자바스크립트 스터디를 모집하고자 합니다.주1회, 목요일 또는 수요일 저녁 8시 또는 9시에 1시간 정도 진행을 할 예정(원격으로 발표형식)입니다.많은 지원 부탁드려요!",
};

const GatherDetailContainer = () => {
  // TODO: 추후 API 호출 로직 작성 필요
  const handleGatherDelete = (gatherId) => {
    console.log("모임 삭제", gatherId);
  };

  const handleGatherClose = (gatherId) => {
    console.log("모임 마감", gatherId);
  };

  const handleGatherApply = (gatherId) => {
    useGatherApply(gatherId);
    console.log("모임 신청", gatherId);
  };

  const handleGatherCancel = (gatherId, userId) => {
    console.log("모임 신청", gatherId, userId);
  };

  const handleCommentSubmit = (gatherId) => {
    console.log("댓글 등록", gatherId);
  };

  const handleCommentDelete = (commentId) => {
    console.log("댓글 삭제", commentId);
  };

  const handleCommentEdit = (commentId) => {
    console.log("댓글 수정", commentId);
  };

  return (
    <GatherDetail
      gatherData={dummy}
      handleCommentDelete={handleCommentDelete}
      handleCommentEdit={handleCommentEdit}
      handleGatherApply={handleGatherApply}
      handleCommentSubmit={handleCommentSubmit}
      handleGatherCancel={handleGatherCancel}
      handleGatherClose={handleGatherClose}
      handleGatherDelete={handleGatherDelete}
    />
  );
};

export default GatherDetailContainer;
