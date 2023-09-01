/* eslint-disable no-console */
import { UserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateUsersRole: UserHandlers["updateUsersRole"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, usersRequiringRole } = req.body;
    if (usersRequiringRole === "SUPER_ADMIN") {
      const updatedUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          role,
        },
      });
      const { password: removedPassword, ...userWithoutPassword } = updatedUser;
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(400).json({ message: "You are not allowed to do that" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateUsersRole;
