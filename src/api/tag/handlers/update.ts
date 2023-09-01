import { TagHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateTag: TagHandlers["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const tag = await prisma.tag.update({
      where: {
        id: id,
      },
      data: {
        name,
      },
    });
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updateTag;
