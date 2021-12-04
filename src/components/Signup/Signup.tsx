import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { HiddenParagraph, SignupContainer, SignupForm } from "./styles";

const courses: string[] = ["백엔드", "프론트엔드", "인공지능"];
const generations: string[] = ["1기", "2기"];
const roles: string[] = ["매니저", "수강생", "멘토"];

const Signup = () => {
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <SignupContainer>
      <h1>회원가입</h1>

      <SignupForm onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="이름" />
        <input type="text" name="email" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
        />
        <label htmlFor="course">
          <HiddenParagraph>코스</HiddenParagraph>
          <select id="course" name="course">
            <option value="">코스를 선택해주세요.</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="generation">
          <HiddenParagraph>기수</HiddenParagraph>
          <select id="generation" name="generation">
            <option value="">기수를 선택해주세요.</option>
            {generations.map((generation) => (
              <option key={generation} value={generation}>
                {generation}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="role">
          <HiddenParagraph>역할</HiddenParagraph>
          <select id="role" name="role">
            <option value="">역할을 선택해주세요.</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">회원가입</button>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
