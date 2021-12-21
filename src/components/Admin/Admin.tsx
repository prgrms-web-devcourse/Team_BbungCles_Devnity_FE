import { FormikProps, useFormik } from "formik";
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
  InviteLinkBorderContainer,
  DatePicker,
  Th,
  Td,
  Tr,
} from "./styles";
import { common, admin } from "../../constants";
import Text from "../base/Text";
import useMutationInviteLink from "../../hooks/useMutationInviteLink";
import useQueryInviteLink from "../../hooks/useQueryInviteLink";
import useCopyClipboard from "../../hooks/useCopyClipboard";
import useDayjs from "../../hooks/useDayjs";

interface FormValues {
  course: string;
  generation: string;
  role: string;
  deadline: string;
}

const Admin = () => {
  const { data } = useQueryInviteLink();
  const { mutate } = useMutationInviteLink();

  const [dayjs] = useDayjs();

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
    onSubmit: (formValues, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      mutate({
        ...formValues,
        deadline: formValues.deadline
          ? dayjs(formValues.deadline).format("YYYY-MM-DD")
          : null,
      });
      setSubmitting(false);
      resetForm();
    },
  });

  const [handleCopyClick] = useCopyClipboard();

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
                onBlur={handleBlur}
              />
              {touched.deadline && !!errors.deadline && (
                <ErrorMessage>{errors.deadline}</ErrorMessage>
              )}
            </SelectAndErrorMessageContainer>
          </SelectContainer>

          <Button type="submit">초대 링크 생성</Button>
        </FormContainer>
      </BorderContainer>

      <InviteLinkBorderContainer>
        <Text size={24} strong>
          유효한 초대 링크 목록
        </Text>
        {data?.data.data.length === 0 && (
          <Text size={16} strong>
            현재 유효한 초대 링크가 없습니다 😥
          </Text>
        )}
        {data?.data.data.length !== 0 && (
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
                  <span>만료일</span>
                </Th>
                <Th />
              </tr>
            </thead>
            <tbody>
              {data?.data.data.map((inviteLink) => (
                <Tr key={inviteLink.uuid}>
                  <Td>{common.courseMap[inviteLink.course]}</Td>
                  <Td>{inviteLink.generation}</Td>
                  <Td>{common.roleMap[inviteLink.role]}</Td>
                  <Td>{dayjs(inviteLink.deadline).format("YYYY-MM-DD")}</Td>
                  <Td>
                    <Button
                      type="button"
                      onClick={handleCopyClick(
                        `${window.location.origin}/signup/${inviteLink.uuid}`
                      )}
                    >
                      링크 복사
                    </Button>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </table>
        )}
      </InviteLinkBorderContainer>
    </Container>
  );
};

export default Admin;
