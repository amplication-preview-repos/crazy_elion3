import { CourseCreateNestedManyWithoutUsersInput } from "./CourseCreateNestedManyWithoutUsersInput";
import { EnrollmentCreateNestedManyWithoutUsersInput } from "./EnrollmentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  courses?: CourseCreateNestedManyWithoutUsersInput;
  email?: string | null;
  enrollments?: EnrollmentCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
