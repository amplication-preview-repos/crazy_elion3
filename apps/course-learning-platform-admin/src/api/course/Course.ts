import { Enrollment } from "../enrollment/Enrollment";
import { Lesson } from "../lesson/Lesson";
import { User } from "../user/User";

export type Course = {
  createdAt: Date;
  description: string | null;
  enrollments?: Array<Enrollment>;
  id: string;
  lessons?: Array<Lesson>;
  published: boolean | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
