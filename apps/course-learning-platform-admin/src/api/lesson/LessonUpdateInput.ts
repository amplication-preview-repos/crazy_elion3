import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type LessonUpdateInput = {
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
  title?: string | null;
};
