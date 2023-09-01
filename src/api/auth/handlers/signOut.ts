/* eslint-disable no-console */
import { AuthController } from "../interface";

const signOut: AuthController["signOut"] = async (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

export default signOut;
