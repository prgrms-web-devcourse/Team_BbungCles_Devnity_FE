import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

const useDayjs = () => {
  dayjs.extend(relativeTime);
  dayjs.extend(customParseFormat);
  dayjs.locale("ko");

  return [dayjs];
};

export default useDayjs;
