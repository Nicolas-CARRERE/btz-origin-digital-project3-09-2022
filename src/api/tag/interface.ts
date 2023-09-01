import { ResponseError } from "../../interfaces/interfaces";
import { RequestHandler } from "express";
import { Tag } from "@prisma/client";

type TagBody = {
  name: string;
};

export interface TagHandlers {
  getAll: RequestHandler<null, Tag[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Tag | ResponseError, null>;
  create: RequestHandler<null, Tag | ResponseError, TagBody>;
  update: RequestHandler<{ id: string }, Tag | ResponseError, TagBody>;
  delete: RequestHandler<{ id: string }, Tag | ResponseError, null>;
}
