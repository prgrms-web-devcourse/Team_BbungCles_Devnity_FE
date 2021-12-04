import { Link } from "react-router-dom";
import { LoginContainer, LoginForm } from "./styles";

const LoginPresenter = () => {
  return (
    <LoginContainer>
      <p>
        아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
      </p>
      <h1>Devnity</h1>

      <LoginForm>
        <input type="text" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />

        <Link to="/findpassword">비밀번호를 잊으셨나요?</Link>

        <button type="submit">로그인</button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPresenter;
