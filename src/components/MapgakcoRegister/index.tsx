import { useFormik } from "formik";
import { memo, useCallback, useEffect } from "react";
import * as Yup from "yup";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import useCustomToast from "../../hooks/useCustomToast";
import Input from "../base/Input";
import {
  Button,
  ButtonContainer,
  CancelButton,
  Container,
  StyledDatePicker,
  ErrorMessage,
  FormContainer,
  InputContainer,
  Textarea,
} from "./stlyes";
import useMutationMapgakcoRegister from "../../hooks/useMutationMapgakcoRegister";
import { Position } from "../../types/commonTypes";

interface IProps {
  userClickPosition: Position;
  onClose: () => void;
}

interface FormValues {
  applicantLimit: number;
  meetingAt: Date | string;
  title: string;
  location: string;
  content: string;
}

const MapgakcoRegister = ({ onClose, userClickPosition }: IProps) => {
  const [toast] = useCustomToast();

  const getDefaultMeetingAt = useCallback(() => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    now.setMinutes(0);

    return now;
  }, []);

  const { mutate } = useMutationMapgakcoRegister();
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<FormValues>({
    initialValues: {
      applicantLimit: 1,
      meetingAt: getDefaultMeetingAt(),
      title: "",
      location: "",
      content: "",
    },
    validationSchema: Yup.object({
      applicantLimit: Yup.number().required("모집 인원은 필수 입니다"),
      meetingAt: Yup.string().required("모임 날짜는 필수 입니다"),
      title: Yup.string().required("모임 제목은 필수 입니다"),
      location: Yup.string().required("상세 장소는 필수 입니다"),
      content: Yup.string().required("내용은 필수 입니다"),
    }),
    onSubmit: (formValues, { setSubmitting }) => {
      setSubmitting(true);
      mutate({
        ...formValues,
        meetingAt: dayjs(formValues.meetingAt).format("YYYY-MM-DDTHH:mm"),
        latitude: userClickPosition.lat,
        longitude: userClickPosition.lng,
      });
      setSubmitting(false);
      resetForm();
      onClose();

      toast({ message: "모집 등록이 완료되었습니다" });
    },
  });

  const handleCancelClick = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose, resetForm]);

  const handleChangeDate = useCallback(
    (changedDate) => {
      if (changedDate) {
        setFieldValue("meetingAt", changedDate.setMinutes(0));
      } else {
        setFieldValue("meetingAt", getDefaultMeetingAt());
      }
    },
    [setFieldValue, getDefaultMeetingAt]
  );

  const filterPassedTime = useCallback((time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  }, []);

  useEffect(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(customParseFormat);
  }, []);

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <InputContainer>
          <label htmlFor="applicantLimit">모집 인원</label>
          <Input
            type="number"
            name="applicantLimit"
            min="1"
            max="50"
            value={values.applicantLimit}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.applicantLimit && !!errors.applicantLimit && (
            <ErrorMessage>{errors.applicantLimit}</ErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="meetingAt">모임 날짜</label>
          <StyledDatePicker
            name="meetingAt"
            placeholderText="yyyy-mm-dd HH:mm"
            dateFormat="yyyy-MM-dd HH:mm"
            selected={values.meetingAt || getDefaultMeetingAt()}
            showTimeSelect
            timeIntervals={60}
            minDate={new Date()}
            maxDate={new Date("9999-12-31")}
            filterTime={filterPassedTime}
            onChange={handleChangeDate}
            value={values.meetingAt}
          />
          {touched.meetingAt && !!errors.meetingAt && (
            <ErrorMessage>{errors.meetingAt}</ErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="title">모임 제목</label>
          <Input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.title && !!errors.title && (
            <ErrorMessage>{errors.title}</ErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="location">상세 장소</label>
          <Input
            type="text"
            name="location"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.location && !!errors.location && (
            <ErrorMessage>{errors.location}</ErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="content">내용</label>
          <Textarea
            name="content"
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.content && !!errors.content && (
            <ErrorMessage>{errors.content}</ErrorMessage>
          )}
        </InputContainer>

        <ButtonContainer>
          <CancelButton type="button" onClick={handleCancelClick}>
            취소
          </CancelButton>

          <Button>등록</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default memo(MapgakcoRegister);
