import * as Yup from "yup";
import { admin } from "../../constants";

export const adminValidator = Yup.object({
  course: Yup.string().required(admin.message.COURSE_REQUIRED_VALIDATION),
  generation: Yup.string().required(
    admin.message.GENERATION_REQUIRED_VALIDATION
  ),
  role: Yup.string().required(admin.message.ROLE_REQUIRED_VALIDATION),
  deadline: Yup.string().required(admin.message.DEADLINE_REQUIRED_VALIDATION),
});
