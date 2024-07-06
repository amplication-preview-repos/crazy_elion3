import { Course } from "../course/Course";
import { Enrollment } from "../enrollment/Enrollment";
import { JsonValue } from "type-fest";

export type User = {
  courses?: Array<Course>;
  createdAt: Date;
  email: string | null;
  enrollments?: Array<Enrollment>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
