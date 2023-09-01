import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import update from "./handlers/update";
import delete_ from "./handlers/delete";
import updateUsersRole from "./handlers/updateUsersRole";

const userController = {
  getAll,
  getOne,
  update,
  updateUsersRole,
  delete: delete_,
};

export default userController;
