/* eslint-disable no-console */
import { UserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteUser: UserHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const userToDelete = await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(200).json({
      message: `${userToDelete.firstname} ${userToDelete.lastname} has been deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteUser;
