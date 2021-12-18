import { FormikProps, useFormik } from "formik";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect } from "react";
import { adminValidator } from "../../utils/yups/admin";
import {
  BorderContainer,
  Button,
  Container,
  Select,
  FormContainer,
  ErrorMessage,
  SelectAndErrorMessageContainer,
  SelectContainer,
  InviteLinkLi,
  LinkInformationContainer,
  InviteLinkBorderContainer,
  DatePicker,
  Th,
} from "./styles";
import { common, admin } from "../../constants";
import Text from "../base/Text";
import useMutationInviteLink from "../../hooks/useMutationInviteLink";
import useQueryInviteLink from "../../hooks/useQueryInviteLink";
import useCopyClipboard from "../../hooks/useCopyClipboard";

interface FormValues {
  course: string;
  generation: string;
  role: string;
  deadline: string;
}

const testDatas = [
  {
    uuid: "dsfkljfsdlkjdfslkj",
    course: "FE",
    generation: "1",
    role: "STUDENT",
    link: "http://test3.com",
    deadline: "20211219",
  },
  {
    uuid: "afdsdsfjlkndfslkjh",
    course: "FE",
    generation: "2",
    role: "STUDENT",
    link: "http://test2.com",
    deadline: "20211219",
  },
];

const Admin = () => {
  const { data, isLoading } = useQueryInviteLink();
  const { mutate } = useMutationInviteLink();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors,
  }: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: { course: "", generation: "", role: "", deadline: "" },
    validationSchema: adminValidator,
    onSubmit: (formValues, { setSubmitting }) => {
      setSubmitting(true);
      mutate({
        ...formValues,
        deadline: formValues.deadline
          ? dayjs(formValues.deadline).format("YYYY-MM-DD")
          : null,
      });
      setSubmitting(false);
    },
  });

  const [handleCopyClick] = useCopyClipboard();

  // TODO: API 연동되면 지울 예정
  // eslint-disable-next-line
  console.log(data, isLoading);

  useEffect(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(customParseFormat);
  }, []);

  return (
    <Container>
      <BorderContainer>
        <Text size={24} strong>
          초대 링크 생성
        </Text>
        <FormContainer onSubmit={handleSubmit}>
          <SelectContainer>
            <SelectAndErrorMessageContainer>
              <Select
                id="course"
                name="course"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.course}
                autoComplete="off"
              >
                <option value="">{admin.selectDefaultLabel.COURSE}</option>
                {common.courses.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>

              {touched.course && !!errors.course && (
                <ErrorMessage>{errors.course}</ErrorMessage>
              )}
            </SelectAndErrorMessageContainer>

            <SelectAndErrorMessageContainer>
              <Select
                id="generation"
                name="generation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.generation}
              >
                <option value="">{admin.selectDefaultLabel.GENERATION}</option>
                {common.generations.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>

              {touched.generation && !!errors.generation && (
                <ErrorMessage>{errors.generation}</ErrorMessage>
              )}
            </SelectAndErrorMessageContainer>

            <SelectAndErrorMessageContainer>
              <Select
                id="role"
                name="role"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.role}
              >
                <option value="">{admin.selectDefaultLabel.ROLE}</option>
                {common.roles.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>

              {touched.role && !!errors.role && (
                <ErrorMessage>{errors.role}</ErrorMessage>
              )}
            </SelectAndErrorMessageContainer>

            <SelectAndErrorMessageContainer>
              <DatePicker
                type="date"
                name="deadline"
                min={dayjs(new Date()).format("YYYY-MM-DD")}
                max="9999-12-31"
                value={values.deadline}
                onChange={handleChange}
              />
            </SelectAndErrorMessageContainer>
          </SelectContainer>

          <Button type="submit">초대 링크 생성</Button>
        </FormContainer>
      </BorderContainer>

      <InviteLinkBorderContainer>
        <Text size={24} strong>
          유효한 초대 링크 목록
        </Text>

        {testDatas?.length === 0 && (
          <Text size={16} strong>
            현재 유효한 초대 링크가 없습니다 😥
          </Text>
        )}
        <table>
          <thead>
            <tr>
              <Th>
                <span>코스</span>
              </Th>
              <Th>
                <span>기수</span>
              </Th>
              <Th>
                <span>역할</span>
              </Th>
              <Th>
                <span>링크</span>
              </Th>
              <Th>
                <span>만료일</span>
              </Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6,000</td>
              <td>110</td>
              <td>1.8%</td>
              <td>22.2</td>
              <td>22.2</td>
            </tr>
            <tr>
              <td>6,000</td>
              <td>110</td>
              <td>1.8%</td>
              <td>22.2</td>
              <td>22.2</td>
            </tr>
            <tr>
              <td>6,000</td>
              <td>110</td>
              <td>1.8%</td>
              <td>22.2</td>
              <td>22.2</td>
            </tr>
          </tbody>
        </table>

        <ul>
          {testDatas.map((testData) => (
            <InviteLinkLi key={testData.uuid}>
              <LinkInformationContainer>
                {`${testData.course} / ${testData.generation} / ${
                  testData.role
                } / ${testData.link} / ${dayjs(testData.deadline).format(
                  "YYYY-MM-DD"
                )}`}
              </LinkInformationContainer>
              <Button type="button" onClick={handleCopyClick(testData.link)}>
                링크 복사
              </Button>
            </InviteLinkLi>
          ))}
        </ul>
      </InviteLinkBorderContainer>
    </Container>
  );
};

export default Admin;
