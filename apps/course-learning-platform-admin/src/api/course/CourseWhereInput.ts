import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
  published?: BooleanNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
