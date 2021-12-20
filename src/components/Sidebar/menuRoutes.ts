import { routes } from "../../constants";

export default [
  {
    name: "데둥이 소개",
    path: routes.USERLIST,
    isNeedAuth: false,
  },
  {
    name: "데둥여지도",
    path: routes.USERSMAP,
    isNeedAuth: false,
  },
  {
    name: "모집 게시판",
    path: routes.GATHERLIST,
    isNeedAuth: false,
  },
  {
    name: "스터디",
    path: routes.GATHERLIST_STUDY,
    isNeedAuth: false,
  },
  {
    name: "동아리",
    path: routes.GATHERLIST_CLUB,
    isNeedAuth: false,
  },
  {
    name: "프로젝트",
    path: routes.GATHERLIST_PROJECT,
    isNeedAuth: false,
  },
  {
    name: "맵각코",
    path: routes.MAPGAKCOLIST,
    isNeedAuth: false,
  },
  {
    name: "관리자",
    path: routes.ADMIN,
    isNeedAuth: true,
  },
];
