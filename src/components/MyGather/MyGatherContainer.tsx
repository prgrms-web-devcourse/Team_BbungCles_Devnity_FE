import MyGather from "./MyGather";

export const dummy = [
  {
    status: "GATHERING",
    gatherId: 1,
    category: "PROJECT",
    title: "자스 같이 해용",
    createdDate: "2021-12-04",
    deadLine: "2021-12-11",
    applicantLimit: 8,
    applicantCount: 3,
    view: 67,
    name: "뿡돌이",
    course: "BE",
    generation: 2,
    profileImgUrl: "https://picsum.photos/200/400",
  },
  {
    status: "CLOSED",
    gatherId: 2,
    category: "STUDY",
    title: "백엔드 스터디 모집",
    createdDate: "2021-11-04",
    deadLine: "2021-11-23",
    applicantLimit: 8,
    applicantCount: 3,
    view: 58,
    name: "뿡수",
    course: "FE",
    generation: 1,
    profileImgUrl: "https://picsum.photos/200/400",
  },
  {
    status: "GATHERING",
    gatherId: 3,
    category: "STUDY",
    title: "백엔드 스터디 모집한다구요~~~",
    createdDate: "2021-10-04",
    deadLine: "2021-10-23",
    applicantLimit: 15,
    applicantCount: 4,
    view: 30,
    name: "뿡민이",
    course: "BE",
    generation: 5,
    profileImgUrl: "https://picsum.photos/200/400",
  },
];

const MyGatherContainer = () => {
  // TODO : 내가 등록한 목록을 가져올 API호출 -> MyGather의 gatherData로 넘겨줄 값을 반환 (현재 dummy데이터로 처리)
  // GET /api/v1/users/me/host
  // 변수 이름: applyData

  // TODO : 내가 신청한 목록을 가져올 API호출
  // GET /api/v1/users/me/applicant
  // 변수 이름: registerData

  return <MyGather applyData={dummy} makeData={dummy} />;
};

export default MyGatherContainer;
