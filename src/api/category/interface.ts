import { ResponseError } from "../../interfaces/interfaces";
import { RequestHandler } from "express";
import { Category } from ".prisma/client";

type CategoryBody = {
  name: string;
};

export interface CategoryHandlers {
  getAll: RequestHandler<null, Category[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Category | ResponseError, null>;
  create: RequestHandler<null, Category | ResponseError, CategoryBody>;
  update: RequestHandler<
    { id: string },
    Category | ResponseError,
    CategoryBody
  >;
  delete: RequestHandler<{ id: string }, Category | ResponseError, null>;
}
