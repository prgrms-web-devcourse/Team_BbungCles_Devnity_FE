import { FormikProps } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { routes, signup, common } from "../../constants";
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
import useQueryCheckValidLink from "../../hooks/useQueryCheckValidLink";
import useCustomToast from "../../hooks/useCustomToast";

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

  const [mounted, setMounted] = useState(false);

  const history = useHistory();
  const params = useParams<{ linkUuid?: string }>();

  const { refetch } = useQueryCheckValidLink(params.linkUuid);

  const [toast] = useCustomToast();

  if (!mounted) {
    if (!params.linkUuid) {
      history.push(routes.LOGIN);
      toast({ message: "⚠ 회원가입 권한이 없습니다 ⚠" });
      return null;
    }

    refetch();
  }

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

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
                  {common.courses.map(({ value, label }) => (
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
                  {common.generations.map(({ value, label }) => (
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
                {common.roles.map(({ value, label }) => (
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
