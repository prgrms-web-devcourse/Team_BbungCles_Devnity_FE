import { useFormik } from "formik";
import * as Yup from "yup";
import { CourseKeyType, RoleKeyType } from "../constants";

export interface FormValues {
  name: string;
  course: CourseKeyType;
  generation: string;
  role: RoleKeyType;
}

const useUsersLocationsFormik = ({
  initialValues,
  submitHandler,
}): typeof formik => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: initialValues.name || "",
      course: initialValues.course || "",
      generation: initialValues.generation || "",
      role: initialValues.role || "",
    },
    validationSchema: Yup.string().required(""),
    onSubmit: (formValues) => {
      submitHandler({
        ...formValues,
      });
    },
  });

  return formik;
};

export default useUsersLocationsFormik;

export type Formik = ReturnType<typeof useUsersLocationsFormik>;
