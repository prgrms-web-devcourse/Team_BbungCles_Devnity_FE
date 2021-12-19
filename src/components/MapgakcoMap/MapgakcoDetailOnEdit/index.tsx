import { BsCalendarDate, BsPeople, BsPinMap } from "react-icons/bs";
import { toast } from "react-toastify";
import theme from "../../../assets/theme";
import useMapgakcoFormik from "../../../hooks/useMapgakcoForm";
import useMutationMapgakcoRegister from "../../../hooks/useMutationMapgakcoRegister";
import useToastUi from "../../../hooks/useToastUi";
import Button from "../../base/Button";
import MarkdownEditor from "../../base/MarkdownEditor";
import {
  HiddenLabel,
  StyledDatePicker,
  Input,
  Card,
  MarkdownEditorWrapper,
  Footer,
  FormContainer,
} from "./styles";

interface Props {
  mapgakcoDetail: any;
}
interface FormValues {
  applicantLimit: number;
  meetingAt: Date | string;
  title: string;
  location: string;
  content: string;
}

const filterPassedTime = (time) => {
  const currentDate = new Date();
  const selectedDate = new Date(time);

  return currentDate.getTime() < selectedDate.getTime();
};

const getDefaultMeetingAt = () => {
  const now = new Date();
  now.setHours(now.getHours() + 1);
  now.setMinutes(0);

  return now;
};

const MapgakcoDetailOnEdit = ({ mapgakcoDetail }: Props) => {
  const [editorRef] = useToastUi();

  const { mutate } = useMutationMapgakcoRegister();

  const submitHandler = (formvValues: FormValues) => {
    console.log("submit handler 실행중");

    mutate(formvValues);
    toast({ message: "모집 등록이 완료되었습니다" });
  };

  const formik = useMapgakcoFormik({
    initialValues: {
      title: mapgakcoDetail?.mapgakco?.title,
      content: mapgakcoDetail.mapgakco?.content,
      applicantLimit: mapgakcoDetail?.mapgakco?.applicantLimit,
      location: mapgakcoDetail?.mapgakco?.location,
      meetingAt: mapgakcoDetail?.mapgakco?.meetingAt,
    },
    submitHandler,
    validation: {
      applicantLimit: {
        min: mapgakcoDetail?.mapgakco?.applicantCount,
      },
    },
  });

  const handleChangeDate = (changedDate) => {
    if (changedDate) {
      formik.setFieldValue("meetingAt", changedDate.setMinutes(0));
    } else {
      formik.setFieldValue("meetingAt", getDefaultMeetingAt());
    }
  };

  const titleInputStyle = {
    padding: "10px 10px 10px 5px",
  };

  const defaultButtonStyle = {
    padding: "8px",
    minWidth: "80px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    outline: 0,
    border: 0,
    boxShadow: theme.boxShadows.primary,
  };

  const activeButtonStyle = {
    ...defaultButtonStyle,
    color: theme.colors.white,
    backgroundColor: theme.colors.markerBlue,
  };

  return (
    <FormContainer onSubmit={formik.handleSubmit} autoComplete="off">
      <Card>
        <div className="poster">
          <h2 className="status">{mapgakcoDetail?.mapgakco?.status}</h2>
          <HiddenLabel htmlFor="title">모임 제목</HiddenLabel>
          <Input
            type="text"
            name="title"
            className="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={titleInputStyle}
          />
          <div className="details">
            <div className="row">
              <BsCalendarDate />
              <HiddenLabel htmlFor="meetingAt">모임 날짜</HiddenLabel>
              <StyledDatePicker
                name="meetingAt"
                className="row-item"
                placeholderText="yyyy-mm-dd HH:mm"
                dateFormat="yyyy-MM-dd HH:mm"
                selected={new Date(formik.values.meetingAt)}
                showTimeSelect
                timeIntervals={60}
                minDate={new Date()}
                maxDate={new Date("9999-12-31")}
                filterTime={filterPassedTime}
                onChange={handleChangeDate}
                value={formik.values.meetingAt}
              />
            </div>
            <span className="row">
              <BsPinMap />
              <HiddenLabel htmlFor="location">모임 위치</HiddenLabel>
              <Input
                type="text"
                name="location"
                className="row-item"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </span>
            <span className="row">
              <BsPeople />
              <HiddenLabel htmlFor="applicantLimit">모임 인원</HiddenLabel>
              <Input
                type="text"
                name="applicantLimit"
                className="row-item"
                value={formik.values.applicantLimit}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <strong>
                (현재: {mapgakcoDetail?.mapgakco?.applicantCount} /{" "}
                {mapgakcoDetail?.mapgakco?.applicantLimit} 명)
              </strong>
            </span>
          </div>
        </div>
      </Card>
      <MarkdownEditorWrapper>
        <MarkdownEditor
          isViewMode={false}
          editorRef={editorRef}
          value={formik.values.content}
          // setEditorText={handleMarkdownChange}
          setEditorText={(value: string) =>
            formik.setFieldValue("content", value)
          }
        />
      </MarkdownEditorWrapper>
      <Footer>
        <button type="submit" style={activeButtonStyle}>
          등록
        </button>
      </Footer>
    </FormContainer>
  );
};

export default MapgakcoDetailOnEdit;
