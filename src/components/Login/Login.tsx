import { FormikProps } from "formik";
import { useMemo } from "react";
import { login } from "../../constants";
import {
  Container,
  LoginForm,
  ErrorMessage,
  Title,
  LoginFormContainer,
  ImageWrapper,
  FormContainer,
  Input,
  Button,
  HiddenLabel,
} from "./styles";
import { FormValues } from "./types";

interface IProps {
  formik: FormikProps<FormValues>;
}

const Login = ({ formik }: IProps) => {
  const errorCondition = useMemo(
    () => ({
      email: formik.touched.email && !!formik.errors.email,
      password: formik.touched.password && !!formik.errors.password,
    }),
    [formik]
  );

  return (
    <Container>
      <LoginFormContainer>
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
          <Title>Devnity</Title>

          <LoginForm onSubmit={formik.handleSubmit} autoComplete="off">
            <HiddenLabel htmlFor="email">{login.text.EMAIL}</HiddenLabel>
            <Input
              name="email"
              type="text"
              placeholder={login.text.EMAIL}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {errorCondition.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : null}

            <HiddenLabel htmlFor="password">{login.text.PASSWORD}</HiddenLabel>
            <Input
              name="password"
              type="password"
              placeholder={login.text.PASSWORD}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {errorCondition.password ? (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            ) : null}

            <Button type="submit">{login.text.LOGIN}</Button>
          </LoginForm>
        </FormContainer>
      </LoginFormContainer>
    </Container>
  );
};

export default Login;
