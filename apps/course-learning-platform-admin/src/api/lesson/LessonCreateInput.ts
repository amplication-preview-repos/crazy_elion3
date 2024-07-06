import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type LessonCreateInput = {
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
  title?: string | null;
};
