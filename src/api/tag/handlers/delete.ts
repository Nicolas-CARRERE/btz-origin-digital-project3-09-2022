import { TagHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneTag: TagHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await prisma.tag.delete({
      where: {
        id: id,
      },
    });

    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }

    res.status(200).json({ message: "Tag deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteOneTag;
