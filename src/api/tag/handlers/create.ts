import { TagHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createTag: TagHandlers["create"] = async (req, res) => {
  try {
    const { name } = req.body;
    const newTag = await prisma.tag.create({
      data: {
        name,
      },
    });
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createTag;
