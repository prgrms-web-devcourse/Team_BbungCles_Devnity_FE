import { FormikProps, useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { routes, signup, common } from "../../constants";
import { FormValues } from "./types";
import {
  ErrorMessage,
  HiddenParagraph,
  HiddenLabel,
  SignupFormContainer,
  SignupForm,
  FormContainer,
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
import { MutationData, MutationError } from "../../types/commonTypes";
import { requestSignup } from "../../utils/apis";
import { signupValidator } from "../../utils/yups/signup";

const Signup = () => {
  const history = useHistory();

  const [toast] = useCustomToast();

  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (values: FormValues) => requestSignup(values),
    {
      onSuccess: () => {
        toast({ message: signup.message.COMPLETED_SIGNUP });
        history.push(routes.LOGIN);
      },
    }
  );

  const {
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
    errors,
    values,
    touched,
  }: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      course: "",
      generation: "",
      role: "",
    },
    validationSchema: signupValidator,
    onSubmit: (formValues, { setSubmitting }) => {
      setSubmitting(true);
      mutate(formValues);
      setSubmitting(false);
    },
  });

  const errorCondition = useMemo(
    () => ({
      name: touched.name && !!errors.name,
      email: touched.email && !!errors.email,
      password: touched.password && !!errors.password,
      confirmPassword: touched.confirmPassword && !!errors.confirmPassword,
      course: touched.course && !!errors.course && !errors.generation,
      generation: touched.generation && !!errors.generation && !errors.course,
      courseAndGeneration:
        (touched.course || touched.generation) &&
        !!errors.course &&
        !!errors.generation,
    }),
    [errors, touched]
  );

  const [mounted, setMounted] = useState(false);

  const params = useParams<{ linkUuid?: string }>();

  const { data: validResultData, refetch } = useQueryCheckValidLink(
    params.linkUuid
  );

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

  useEffect(() => {
    setFieldValue("course", validResultData?.data.data.course);
    setFieldValue("generation", validResultData?.data.data.generation);
    setFieldValue("role", validResultData?.data.data.role);
  }, [validResultData, setFieldValue]);

  return (
    <Container>
      <SignupFormContainer>
        <FormContainer>
          <Title>회원가입</Title>

          <SignupForm onSubmit={handleSubmit}>
            <HiddenLabel htmlFor="name" style={{ display: "none" }}>
              {signup.text.NAME}
            </HiddenLabel>
            <Input
              type="text"
              name="name"
              placeholder={signup.text.NAME}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errorCondition.name ? (
              <ErrorMessage>{errors.name}</ErrorMessage>
            ) : null}

            <HiddenLabel htmlFor="email" style={{ display: "none" }}>
              {signup.text.EMAIL}
            </HiddenLabel>
            <Input
              type="text"
              name="email"
              placeholder={signup.text.EMAIL}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errorCondition.email ? (
              <ErrorMessage>{errors.email}</ErrorMessage>
            ) : null}

            <HiddenLabel htmlFor="password" style={{ display: "none" }}>
              {signup.text.PASSWORD}
            </HiddenLabel>
            <Input
              type="password"
              name="password"
              placeholder={signup.text.PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errorCondition.password ? (
              <ErrorMessage>{errors.password}</ErrorMessage>
            ) : null}

            <HiddenLabel htmlFor="confirmPassword" style={{ display: "none" }}>
              {signup.text.CONFIRM_PASSWORD}
            </HiddenLabel>
            <Input
              type="password"
              name="confirmPassword"
              placeholder={signup.text.CONFIRM_PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            {errorCondition.confirmPassword ? (
              <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
            ) : null}
            <RowContainer>
              <Label htmlFor="course">
                <HiddenParagraph>{signup.text.COURSE}</HiddenParagraph>
                <Select
                  id="course"
                  name="course"
                  value={validResultData?.data.data.course}
                  disabled
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
                  value={validResultData?.data.data.generation}
                  disabled
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
              <ErrorMessage>{errors.course}</ErrorMessage>
            ) : null}
            {errorCondition.generation ? (
              <ErrorMessage>{errors.generation}</ErrorMessage>
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
                value={validResultData?.data.data.role}
                disabled
              >
                <option value="">{signup.selectDefaultLabel.ROLE}</option>
                {common.roles.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </Label>
            {touched.role && errors.role ? (
              <ErrorMessage>{errors.role}</ErrorMessage>
            ) : null}

            <Button type="submit">{signup.text.SIGNUP}</Button>
          </SignupForm>
        </FormContainer>
      </SignupFormContainer>
    </Container>
  );
};

export default Signup;
