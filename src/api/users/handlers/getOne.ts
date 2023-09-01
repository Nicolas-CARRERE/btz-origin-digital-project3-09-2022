/* eslint-disable no-console */
import { UserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneUser: UserHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUniqueOrThrow({
      where: { id },
    });

    const { password: removedPassword, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneUser;
