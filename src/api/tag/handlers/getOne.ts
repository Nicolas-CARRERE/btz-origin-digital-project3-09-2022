import { TagHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneTag: TagHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await prisma.tag.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getOneTag;
