import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import delete_ from "./handlers/delete";
import createWithSections from "./handlers/createPageWithSections";

const controller = {
  getAll,
  getOne,
  create,
  update,
  delete: delete_,
  createWithSections,
};

export default controller;
