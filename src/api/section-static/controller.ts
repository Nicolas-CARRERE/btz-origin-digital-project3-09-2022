import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import delete_ from "./handlers/delete";
import connectVideo from "./handlers/connectVideo";
import disconnectVideo from "./handlers/disconnectVideo";
import createWithVideos from "./handlers/createWithVideos";

const controller = {
  getAll,
  getOne,
  create,
  update,
  delete: delete_,
  connectVideo,
  disconnectVideo,
  createWithVideos,
};

export default controller;
