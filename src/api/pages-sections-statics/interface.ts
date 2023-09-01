import { ResponseError } from "../../interfaces/interfaces";
import { RequestHandler } from "express";
import { Pages_Sections_Statics } from ".prisma/client";

type PageSectionsStaticsBody = {
  position: number;
  pageId: string;
  sectionsStaticId: string;
};

export interface PageSectionsStaticsHandlers {
  getAll: RequestHandler<null, Pages_Sections_Statics[] | ResponseError, null>;
  getOne: RequestHandler<
    { id: string },
    Pages_Sections_Statics | ResponseError,
    null
  >;
  create: RequestHandler<
    null,
    Pages_Sections_Statics | ResponseError,
    PageSectionsStaticsBody
  >;
  update: RequestHandler<
    { id: string },
    Pages_Sections_Statics | ResponseError,
    PageSectionsStaticsBody
  >;
  delete: RequestHandler<
    { id: string },
    Pages_Sections_Statics | ResponseError,
    null
  >;
}
