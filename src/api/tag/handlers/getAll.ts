import { TagHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllTags: TagHandlers["getAll"] = async (req, res) => {
  try {
    const tags = await prisma.tag.findMany();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllTags;
