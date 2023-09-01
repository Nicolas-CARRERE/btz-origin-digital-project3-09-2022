/* eslint-disable no-console */

import prisma from "../../../../prisma/client";
import { UserHandlers } from "../interface";

const getAllUsers: UserHandlers["getAll"] = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        username: true,
        email: true,
        imageUrl: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllUsers;
