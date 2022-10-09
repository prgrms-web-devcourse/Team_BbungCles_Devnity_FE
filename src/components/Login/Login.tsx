import { FormikProps } from "formik";
import { useMemo } from "react";
import { login } from "../../constants";
import {
  Container,
  LoginForm,
  ErrorMessage,
  LoginFormContainer,
  FormContainer,
  Button,
  HiddenLabel,
  GuestButton,
} from "./styles";
import { Input } from "../base/Input";
import { FormValues } from "./types";

interface IProps {
  formik: FormikProps<FormValues>;
  onGuestLogin: () => void;
}

const Login = ({ formik, onGuestLogin }: IProps) => {
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
        <FormContainer>
          <img
            // TODO: 추후 webpack 설정 필요
            // eslint-disable-next-line
            src={require("../../assets/images/logo.png")}
            width="100%"
            height="80px"
            alt="main"
            style={{ width: "100%", objectFit: "contain" }}
          />

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

          <GuestButton onClick={onGuestLogin}>{login.text.GUEST}</GuestButton>
        </FormContainer>
      </LoginFormContainer>
    </Container>
  );
};

export default Login;
