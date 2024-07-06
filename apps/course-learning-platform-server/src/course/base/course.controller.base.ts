/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CourseService } from "../course.service";
import { CourseCreateInput } from "./CourseCreateInput";
import { Course } from "./Course";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseWhereUniqueInput } from "./CourseWhereUniqueInput";
import { CourseUpdateInput } from "./CourseUpdateInput";
import { EnrollmentFindManyArgs } from "../../enrollment/base/EnrollmentFindManyArgs";
import { Enrollment } from "../../enrollment/base/Enrollment";
import { EnrollmentWhereUniqueInput } from "../../enrollment/base/EnrollmentWhereUniqueInput";
import { LessonFindManyArgs } from "../../lesson/base/LessonFindManyArgs";
import { Lesson } from "../../lesson/base/Lesson";
import { LessonWhereUniqueInput } from "../../lesson/base/LessonWhereUniqueInput";

export class CourseControllerBase {
  constructor(protected readonly service: CourseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Course })
  async createCourse(@common.Body() data: CourseCreateInput): Promise<Course> {
    return await this.service.createCourse({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        published: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Course] })
  @ApiNestedQuery(CourseFindManyArgs)
  async courses(@common.Req() request: Request): Promise<Course[]> {
    const args = plainToClass(CourseFindManyArgs, request.query);
    return this.service.courses({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        published: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async course(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    const result = await this.service.course({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        published: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCourse(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() data: CourseUpdateInput
  ): Promise<Course | null> {
    try {
      return await this.service.updateCourse({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          published: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCourse(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    try {
      return await this.service.deleteCourse({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          published: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/enrollments")
  @ApiNestedQuery(EnrollmentFindManyArgs)
  async findEnrollments(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Enrollment[]> {
    const query = plainToClass(EnrollmentFindManyArgs, request.query);
    const results = await this.service.findEnrollments(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        enrolledAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/enrollments")
  async connectEnrollments(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: EnrollmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      enrollments: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/enrollments")
  async updateEnrollments(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: EnrollmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      enrollments: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/enrollments")
  async disconnectEnrollments(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: EnrollmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      enrollments: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/lessons")
  @ApiNestedQuery(LessonFindManyArgs)
  async findLessons(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Lesson[]> {
    const query = plainToClass(LessonFindManyArgs, request.query);
    const results = await this.service.findLessons(params.id, {
      ...query,
      select: {
        content: true,

        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/lessons")
  async connectLessons(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: LessonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      lessons: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/lessons")
  async updateLessons(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: LessonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      lessons: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/lessons")
  async disconnectLessons(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: LessonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      lessons: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }
}
