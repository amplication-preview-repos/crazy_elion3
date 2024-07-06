import { CourseUpdateManyWithoutUsersInput } from "./CourseUpdateManyWithoutUsersInput";
import { EnrollmentUpdateManyWithoutUsersInput } from "./EnrollmentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  courses?: CourseUpdateManyWithoutUsersInput;
  email?: string | null;
  enrollments?: EnrollmentUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
