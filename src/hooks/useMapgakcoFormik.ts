import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";

interface FormValues {
  applicantLimit: number;
  meetingAt: Date | string;
  title: string;
  location: string;
  content: string;
}

const getDefaultMeetingAt = () => {
  const now = new Date();
  now.setHours(now.getHours() + 1);
  now.setMinutes(0);

  return now;
};

const useMapgakcoFormik = ({ initialValues, submitHandler }): typeof formik => {
  const formik = useFormik<FormValues>({
    initialValues: {
      title: initialValues.title || "",
      content: initialValues.content || "",
      applicantLimit: initialValues.applicantLimit || 1,
      meetingAt: initialValues.meetingAt || getDefaultMeetingAt(),
      location: initialValues.location || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("모임 제목은 필수 입니다"),
      content: Yup.string().required("내용은 필수 입니다"),
      applicantLimit: Yup.number().required("모집 인원은 필수입니다"),
      meetingAt: Yup.string().required("모임 날짜는 필수 입니다"),
      location: Yup.string().required("상세 장소는 필수 입니다"),
    }),
    onSubmit: (formValues) => {
      submitHandler({
        ...formValues,
        meetingAt: dayjs(formValues.meetingAt).format("YYYY-MM-DDTHH:00:00"),
      });
    },
  });

  return formik;
};

export default useMapgakcoFormik;
