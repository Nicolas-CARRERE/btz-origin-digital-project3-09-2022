import { Role, User } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError, ResponseValidation } from "../../interfaces/interfaces";

type TUserBody = Omit<User, "id">;
type TUserWithoutPassword = Omit<User, "password">;

export interface UserHandlers {
  getAll: RequestHandler<null, TUserWithoutPassword[] | ResponseError, null>;
  getOne: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    null
  >;
  update: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    TUserBody
  >;
  updateUsersRole: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    { role: Role; usersRequiringRole: "SUPER_ADMIN" }
  >;
  delete: RequestHandler<
    { id: string },
    ResponseValidation | ResponseError,
    null
  >;
}
