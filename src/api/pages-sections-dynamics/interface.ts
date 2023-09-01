import { ResponseError } from "../../interfaces/interfaces";
import { RequestHandler } from "express";
import { Pages_Sections_Dynamics } from ".prisma/client";

type PageSectionsDynamicsBody = {
  position: number;
  pageId: string;
  sectionsDynamicId: string;
};

export interface PageSectionsDynamicsHandlers {
  getAll: RequestHandler<null, Pages_Sections_Dynamics[] | ResponseError, null>;
  getOne: RequestHandler<
    { id: string },
    Pages_Sections_Dynamics | ResponseError,
    null
  >;
  create: RequestHandler<
    null,
    Pages_Sections_Dynamics | ResponseError,
    PageSectionsDynamicsBody
  >;
  update: RequestHandler<
    { id: string },
    Pages_Sections_Dynamics | ResponseError,
    PageSectionsDynamicsBody
  >;
  delete: RequestHandler<
    { id: string },
    Pages_Sections_Dynamics | ResponseError,
    null
  >;
}
