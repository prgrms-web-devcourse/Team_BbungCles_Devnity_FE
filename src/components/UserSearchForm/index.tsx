import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "../base/Input";
import { FormContainer, Select, IconWrapper, VerticalDivider } from "./styles";
import theme from "../../assets/theme";
import { common } from "../../constants";

interface IProps {
  setFilters: React.Dispatch<
    React.SetStateAction<{
      name: string | null;
      course: string | null;
      generation: string | null;
      role: string | null;
      nextLastId: number | null;
      size: number | null;
    }>
  >;
}

const UserSearchForm = ({ setFilters }: IProps) => {
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
      // nextLastId에 null을 넣은 이유는 무한스크롤 외 일반 조회할 때는 필요없기 때문
      setFilters({
        ...formValues,
        nextLastId: null,
        size: common.userListInfinitePageCount,
      });
      setSubmitting(false);
    },
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <IconWrapper>
        <AiOutlineSearch size={24} color={theme.colors.gray500} />
      </IconWrapper>

      <Input
        type="text"
        name="name"
        placeholder={common.message.ENTER_SEARCH_TERM}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        customStyle={{
          height: "64px",
          fontSize: "16px",
          boxShadow: "none",
        }}
      />

      <VerticalDivider />

      <Select
        id="generation"
        name="generation"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.generation}
      >
        <option value="">{common.text.GENERATION}</option>
        {common.generations.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>

      <VerticalDivider />

      <Select
        id="course"
        name="course"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.course}
      >
        <option value="">{common.text.COURSE}</option>
        {common.courses.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>

      <VerticalDivider />

      <Select
        id="role"
        name="role"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.role}
      >
        <option value="">{common.text.ROLE}</option>
        {common.roles.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default UserSearchForm;
