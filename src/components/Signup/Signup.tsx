import { FormikProps } from "formik";
import { signup } from "../../utils/constants";
import {
  ErrorMessage,
  HiddenParagraph,
  SignupContainer,
  SignupForm,
} from "./styles";
import { FormValues } from "./types";

interface SelectOption {
  value: string | number;
  label: string;
}

// TODO: 아직 데이터의 형태가 정해지지 않아 아래와 같이 사용함, 추후 데이터의 형태가 정해지면 백엔드에서 받아온 후 처리
const courses: SelectOption[] = [
  { value: "front", label: "프론트엔드" },
  { value: "back", label: "백엔드" },
  { value: "ai", label: "인공지능" },
];
const generations: SelectOption[] = [
  { value: "1", label: "1기" },
  { value: "2", label: "2기" },
];
const roles: SelectOption[] = [
  { value: "student", label: "수강생" },
  { value: "manager", label: "매니저" },
  { value: "mentor", label: "멘토" },
];

interface IProps {
  formik: FormikProps<FormValues>;
}

const Signup = ({ formik }: IProps) => {
  return (
    <SignupContainer>
      <h1>회원가입</h1>

      <SignupForm onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={signup.text.NAME}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}

        <input
          type="text"
          name="email"
          placeholder={signup.text.EMAIL}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}

        <input
          type="password"
          name="password"
          placeholder={signup.text.PASSWORD}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}

        <input
          type="password"
          name="confirmPassword"
          placeholder={signup.text.CONFIRM_PASSWORD}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
        ) : null}

        <label htmlFor="course">
          <HiddenParagraph>{signup.text.COURSE}</HiddenParagraph>
          <select
            id="course"
            name="course"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.course}
          >
            <option value="">
              {signup.message.COURSE_REQUIRED_VALIDATION}
            </option>
            {courses.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        {formik.touched.course && formik.errors.course ? (
          <ErrorMessage>{formik.errors.course}</ErrorMessage>
        ) : null}

        <label htmlFor="generation">
          <HiddenParagraph>{signup.text.GENERATION}</HiddenParagraph>
          <select
            id="generation"
            name="generation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.generation}
          >
            <option value="">
              {signup.message.GENERATION_REQUIRED_VALIDATION}
            </option>
            {generations.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        {formik.touched.generation && formik.errors.generation ? (
          <ErrorMessage>{formik.errors.generation}</ErrorMessage>
        ) : null}

        <label htmlFor="role">
          <HiddenParagraph>{signup.text.ROLE}</HiddenParagraph>
          <select
            id="role"
            name="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
          >
            <option value="">{signup.message.ROLE_REQUIRED_VALIDATION}</option>
            {roles.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        {formik.touched.role && formik.errors.role ? (
          <ErrorMessage>{formik.errors.role}</ErrorMessage>
        ) : null}

        <button type="submit">{signup.text.SIGNUP}</button>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
