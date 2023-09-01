import { getToken } from "../../../middlewares/checkToken";
import { AuthController } from "../interface";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "secret";

const authMeHandler: AuthController["me"] = async (req, res) => {
  const token = getToken(req, res);
  if (!token) {
    return res.status(401).json({
      message: "You need to login",
    });
  }

  const decoded = jwt.verify(token, secret);

  if (typeof decoded === "string") {
    throw new Error(decoded);
  }

  return res.status(200).json(decoded);
};

export default authMeHandler;
