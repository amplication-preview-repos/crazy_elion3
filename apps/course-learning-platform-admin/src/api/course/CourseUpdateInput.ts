import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";
import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourseUpdateInput = {
  description?: string | null;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  lessons?: LessonUpdateManyWithoutCoursesInput;
  published?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
