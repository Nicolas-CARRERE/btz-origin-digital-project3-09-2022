import { CategoryHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneCategory: CategoryHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.category.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getOneCategory;
