import { Pages_Advertisings } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError, ResponseValidation } from "../../interfaces/interfaces";

type TPagesAddBody = Omit<Pages_Advertisings, "id" | "createdAt" | "updatedAt">;

export interface PagesAdvertisingsHandlers {
  getAll: RequestHandler<null, Pages_Advertisings[] | ResponseError, null>;
  getOne: RequestHandler<
    { id: string },
    Pages_Advertisings | ResponseError,
    null
  >;
  create: RequestHandler<
    null,
    Pages_Advertisings | ResponseError,
    TPagesAddBody
  >;
  update: RequestHandler<
    { id: string },
    Pages_Advertisings | ResponseError,
    TPagesAddBody
  >;
  delete: RequestHandler<
    { id: string },
    ResponseValidation | ResponseError,
    null
  >;
}
