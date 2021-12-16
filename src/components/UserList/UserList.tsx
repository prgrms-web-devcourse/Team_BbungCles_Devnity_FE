import { useFormik } from "formik";
import * as Yup from "yup";
import { courses, generations, roles } from "../../../fixtures/selectDatas";
import { common } from "../../constants";
import Input from "../base/Input";
import Text from "../base/Text";
import ProfileCard from "../ProfileCard/ProfileCard";
import {
  Button,
  Container,
  SearchBarFormContainer,
  UserContainer,
  InputWrapper,
  ButtonWrapper,
  Select,
  ProfileCardWrapper,
} from "./styles";
import { IProps } from "./types";

const UserList = ({ users, setFilters, isLoading }: IProps) => {
  const { handleChange, handleSubmit, handleBlur, values } = useFormik<{
    name: string;
    course: string;
    generation: string;
    role: string;
  }>({
    initialValues: { name: "", course: "", generation: "", role: "" },
    validationSchema: Yup.string().required(""),
    onSubmit: (formValues, { setSubmitting }) => {
      setSubmitting(true);
      // TODO: 백엔드 API 개발되면 붙여야 함
      // eslint-disable-next-line
      setFilters({ ...formValues, nextLastId: users?.nextLastId, size: 5 });
      setSubmitting(false);
    },
  });

  return (
    <Container>
      <SearchBarFormContainer onSubmit={handleSubmit}>
        <InputWrapper>
          <Select
            id="generation"
            name="generation"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.generation}
          >
            <option value="">{common.text.GENERATION}</option>
            {generations.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Select
            id="course"
            name="course"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.course}
          >
            <option value="">{common.text.COURSE}</option>
            {courses.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Select
            id="role"
            name="role"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
          >
            <option value="">{common.text.ROLE}</option>
            {roles.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Input
            type="text"
            name="name"
            placeholder={common.message.ENTER_SEARCH_TERM}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit">
            <Text size={12} color="white" strong ellipsisLineClamp={1}>
              {common.text.SEARCH}
            </Text>
          </Button>
        </ButtonWrapper>
      </SearchBarFormContainer>

      {/* TODO: 검색 결과가 없을 경우 */}
      {!isLoading && (
        <UserContainer>
          {users?.values.map((user) => (
            <ProfileCardWrapper key={user.user.userId} role="feed">
              <ProfileCard user={user} />
            </ProfileCardWrapper>
          ))}
        </UserContainer>
      )}
    </Container>
  );
};

export default UserList;
