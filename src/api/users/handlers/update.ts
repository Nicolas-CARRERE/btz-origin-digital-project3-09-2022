/* eslint-disable no-console */
import { UserHandlers } from "../interface";
import prisma from "../../../../prisma/client";
import bcrypt from "bcrypt";

const updateUser: UserHandlers["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, firstname, imageUrl, lastname, role, username } = req.body;
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        firstname,
        imageUrl,
        lastname,
        password: hashedPassword,
        role,
        username,
      },
    });
    const { password: removedPassword, ...userWithoutPassword } = updatedUser;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateUser;
