import {
  BsPeople,
  BsPinMap,
  BsClipboardCheck,
  BsBook,
  BsStar,
  BsLaptop,
  BsMap,
} from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";

interface Props {
  name: string;
}

const SidebarIcon = ({ name }: Props) => {
  const Map = {
    "데둥이 소개": <BsPeople />,
    데둥여지도: <BsPinMap />,
    "모집 게시판": <BsClipboardCheck />,
    스터디: <BsBook />,
    동아리: <BsStar />,
    프로젝트: <BsLaptop />,
    맵각코: <BsMap />,
    관리자: <GrUserAdmin />,
  };

  return Map[name];
};

export default SidebarIcon;
