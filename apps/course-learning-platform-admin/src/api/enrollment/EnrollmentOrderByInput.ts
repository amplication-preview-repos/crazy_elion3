import { SortOrder } from "../../util/SortOrder";

export type EnrollmentOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  enrolledAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
