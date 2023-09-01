import { PageHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createPage: PageHandlers["create"] = async (req, res) => {
  try {
    const { title } = req.body;
    const newPage = await prisma.page.create({
      data: {
        title,
      },
    });
    res.status(201).json(newPage);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createPage;
