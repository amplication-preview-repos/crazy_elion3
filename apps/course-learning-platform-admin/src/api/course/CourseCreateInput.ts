import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";
import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourseCreateInput = {
  description?: string | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  lessons?: LessonCreateNestedManyWithoutCoursesInput;
  published?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
