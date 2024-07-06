import { Course } from "../course/Course";

export type Lesson = {
  content: string | null;
  course?: Course | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
