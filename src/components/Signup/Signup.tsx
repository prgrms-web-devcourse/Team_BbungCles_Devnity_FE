import { FormikProps } from "formik";
import { useMemo } from "react";
import signup from "../../utils/constants/signup";
import { FormValues } from "./types";
import {
  ErrorMessage,
  HiddenParagraph,
  HiddenLabel,
  SignupFormContainer,
  SignupForm,
  FormContainer,
  ImageWrapper,
  Title,
  Container,
  Input,
  Select,
  Button,
  RowContainer,
  Label,
} from "./styles";

interface SelectOption {
  value: string | number;
  label: string;
}

// TODO : 추후 data로 분리해야 함 (백엔드 API로 받아올 가능성도 있음)
const courses: SelectOption[] = [
  { value: "FE", label: "프론트엔드" },
  { value: "BE", label: "백엔드" },
  { value: "AI", label: "인공지능" },
];
const generations: SelectOption[] = [
  { value: "1", label: "1기" },
  { value: "2", label: "2기" },
];
const roles: SelectOption[] = [
  { value: "STUDENT", label: "수강생" },
  { value: "MANAGER", label: "매니저" },
  { value: "MENTOR", label: "멘토" },
];

interface IProps {
  formik: FormikProps<FormValues>;
}

const Signup = ({ formik }: IProps) => {
  const errorCondition = useMemo(
    () => ({
      name: formik.touched.name && !!formik.errors.name,
      email: formik.touched.email && !!formik.errors.email,
      password: formik.touched.password && !!formik.errors.password,
      confirmPassword:
        formik.touched.confirmPassword && !!formik.errors.confirmPassword,
      course:
        formik.touched.course &&
        !!formik.errors.course &&
        !formik.errors.generation,
      generation:
        formik.touched.generation &&
        !!formik.errors.generation &&
        !formik.errors.course,
      courseAndGeneration:
        (formik.touched.course || formik.touched.generation) &&
        !!formik.errors.course &&
        !!formik.errors.generation,
    }),
    [formik]
  );

  return (
    <Container>
      <SignupFormContainer>
        <ImageWrapper>
          <img
            src="https://source.unsplash.com/random"
            width="100%"
            height="100%"
            alt="profile"
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
        </ImageWrapper>

        <FormContainer>
          <Title>회원가입</Title>

          <SignupForm onSubmit={formik.handleSubmit}>
            <HiddenLabel htmlFor="name" style={{ display: "none" }}>
              {signup.text.NAME}
            </HiddenLabel>
            <Input
              type="text"
              name="name"
              placeholder={signup.text.NAME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {errorCondition.name ? (
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
            ) : null}

            <HiddenLabel htmlFor="email" style={{ display: "none" }}>
              {signup.text.EMAIL}
            </HiddenLabel>
            <Input
              type="text"
              name="email"
              placeholder={signup.text.EMAIL}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {errorCondition.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : null}

            <HiddenLabel htmlFor="password" style={{ display: "none" }}>
              {signup.text.PASSWORD}
            </HiddenLabel>
            <Input
              type="password"
              name="password"
              placeholder={signup.text.PASSWORD}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {errorCondition.password ? (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            ) : null}

            <HiddenLabel htmlFor="confirmPassword" style={{ display: "none" }}>
              {signup.text.CONFIRM_PASSWORD}
            </HiddenLabel>
            <Input
              type="password"
              name="confirmPassword"
              placeholder={signup.text.CONFIRM_PASSWORD}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {errorCondition.confirmPassword ? (
              <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
            ) : null}
            <RowContainer>
              <Label htmlFor="course">
                <HiddenParagraph>{signup.text.COURSE}</HiddenParagraph>
                <Select
                  id="course"
                  name="course"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.course}
                >
                  <option value="">{signup.selectDefaultLabel.COURSE}</option>
                  {courses.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </Label>

              <Label htmlFor="generation">
                <HiddenParagraph>{signup.text.GENERATION}</HiddenParagraph>
                <Select
                  id="generation"
                  name="generation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.generation}
                >
                  <option value="">
                    {signup.selectDefaultLabel.GENERATION}
                  </option>
                  {generations.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </Label>
            </RowContainer>
            {errorCondition.course ? (
              <ErrorMessage>{formik.errors.course}</ErrorMessage>
            ) : null}
            {errorCondition.generation ? (
              <ErrorMessage>{formik.errors.generation}</ErrorMessage>
            ) : null}
            {errorCondition.courseAndGeneration ? (
              <ErrorMessage>
                {signup.message.COURSE_AND_GENERATION_REQUIRED_VALIDATION}
              </ErrorMessage>
            ) : null}

            <Label htmlFor="role">
              <HiddenParagraph>{signup.text.ROLE}</HiddenParagraph>
              <Select
                id="role"
                name="role"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.role}
              >
                <option value="">{signup.selectDefaultLabel.ROLE}</option>
                {roles.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </Label>
            {formik.touched.role && formik.errors.role ? (
              <ErrorMessage>{formik.errors.role}</ErrorMessage>
            ) : null}

            <Button type="submit">{signup.text.SIGNUP}</Button>
          </SignupForm>
        </FormContainer>
      </SignupFormContainer>
    </Container>
  );
};

export default Signup;
