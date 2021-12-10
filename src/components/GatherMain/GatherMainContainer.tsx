import GatherMain from "./GatherMain";

const dummy = [
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

export interface IProps {
  selectedCategory?: string;
}

const GatherContainer = ({ selectedCategory }: IProps) => {
  // TODO: 검색 API를 호출하도록 연동해야한다.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleWrite = (e) => {
    // TODO: 등록 모달 창이 뜨도록 구현해야한다.
    // eslint-disable-next-line no-console
    console.log("글쓰기 버튼 클릭", e);
  };

  return (
    <GatherMain
      gatherData={dummy}
      handleSubmit={handleSubmit}
      selectedCategory={selectedCategory}
      handleWrite={handleWrite}
    />
  );
};
export default GatherContainer;
