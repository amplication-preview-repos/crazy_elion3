import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type LessonWhereInput = {
  content?: StringNullableFilter;
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
};
