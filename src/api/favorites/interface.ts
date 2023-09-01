import { Favorite, Video } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError, ResponseValidation } from "../../interfaces/interfaces";

type TFavoriteBody = Omit<Favorite, "id" | "createdAt">;

export interface FavoriteHandlers {
  getAll: RequestHandler<null, Video[] | ResponseError, null>;
  getOne: RequestHandler<null, Favorite | ResponseError, null>;
  create: RequestHandler<null, Favorite | ResponseError, TFavoriteBody>;
  isFavorite: RequestHandler<null, Favorite | ResponseError | null, null>;
  delete: RequestHandler<
    { id: string },
    ResponseValidation | ResponseError,
    null
  >;
}
