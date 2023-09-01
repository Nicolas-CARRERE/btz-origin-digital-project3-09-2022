/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "@prisma/client";
import { RequestHandler } from "express";
import { JwtPayload } from "jsonwebtoken";
import { ResponseError } from "../../interfaces/interfaces";

type TUserwithoutPassword = Omit<User, "password">;

type TLoginBody = {
  email: string;
  password: string;
};

type TRegisterBody = Omit<User, "id" | "createdAt" | "updatedAt" | "role">;

export interface AuthController {
  signIn: RequestHandler<
    null,
    TUserwithoutPassword | ResponseError,
    TLoginBody,
    null
  >;
  signUp: RequestHandler<
    null,
    TUserwithoutPassword | ResponseError,
    TRegisterBody,
    null
  >;
  signOut: RequestHandler<null, null, null, null>;
  me: RequestHandler<Record<any, string>, JwtPayload | ResponseError>;
}
