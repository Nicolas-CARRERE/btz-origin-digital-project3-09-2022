/* eslint-disable @typescript-eslint/no-explicit-any */
import { Advertising } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError, ResponseValidation } from "../../interfaces/interfaces";

type TAdvertisingBody = Omit<Advertising, "id" | "createdAt" | "updatedAt">;

export interface AdvertisingHandlers {
  getAll: RequestHandler<null, Advertising[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Advertising | ResponseError, null>;
  create: RequestHandler<
    Record<string, any>,
    Advertising | ResponseError,
    TAdvertisingBody
  >;
  update: RequestHandler<
    { id: string },
    Advertising | ResponseError,
    TAdvertisingBody
  >;
  delete: RequestHandler<
    { id: string },
    ResponseValidation | ResponseError,
    null
  >;
}
