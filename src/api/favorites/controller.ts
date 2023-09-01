import create from "./handlers/create";
import delete_ from "./handlers/delete";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import isFavorite from "./handlers/isFavorite";

import { FavoriteHandlers } from "./interface";

const favoriteController: FavoriteHandlers = {
  create,
  delete: delete_,
  getAll,
  getOne,
  isFavorite,
};

export default favoriteController;
