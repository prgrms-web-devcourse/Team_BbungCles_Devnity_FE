import { Link } from "react-router-dom";
import { FormikProps } from "formik";
import { LoginContainer, LoginForm, ErrorMessage } from "./styles";
import { FormValues } from "./types";

interface IProps {
  formik: FormikProps<FormValues>;
}

const Login = ({ formik }: IProps) => {
  return (
    <LoginContainer>
      <p>
        아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
      </p>
      <h1>Devnity</h1>

      <LoginForm onSubmit={formik.handleSubmit} autoComplete="off">
        <input
          name="email"
          type="email"
          placeholder="이메일"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}

        <Link to="/findpassword">비밀번호를 잊으셨나요?</Link>

        <button type="submit">로그인</button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
