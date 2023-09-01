import { ResponseError } from "../../interfaces/interfaces";
import { RequestHandler } from "express";
import { Section_Dynamic } from ".prisma/client";

type SectionDynamicBody = {
  title: string;
  description: string;
  max: number;
  isGrid: boolean;
  categoryId: string;
  videoId: string;
};

export interface SectionDynamicHandlers {
  getAll: RequestHandler<null, Section_Dynamic[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Section_Dynamic | ResponseError, null>;
  create: RequestHandler<
    null,
    Section_Dynamic | ResponseError,
    SectionDynamicBody
  >;
  update: RequestHandler<
    { id: string },
    Section_Dynamic | ResponseError,
    SectionDynamicBody
  >;
  delete: RequestHandler<{ id: string }, Section_Dynamic | ResponseError, null>;
}
