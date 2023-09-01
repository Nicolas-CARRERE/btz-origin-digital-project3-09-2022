/* eslint-disable no-console */
import { AuthController } from "../interface";
import prisma from "../../../../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from "cookies";

const signUp: AuthController["signUp"] = async (req, res) => {
  const cookies = new Cookies(req, res, {
    secure: process.env.NODE_ENV === "production",
  });
  try {
    const { email, firstname, imageUrl, lastname, username } = req.body;
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        firstname,
        imageUrl,
        lastname,
        password: hashedPassword,
        username,
      },
    });

    const { password: removedPassword, ...newUserWithoutPassword } = newUser;
    const secret = process.env.JWT_SECRET || "secret";
    const token = jwt.sign(newUserWithoutPassword, secret);

    cookies.set("token", `Bearer ${token}`, {
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.status(200).json(newUserWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default signUp;
