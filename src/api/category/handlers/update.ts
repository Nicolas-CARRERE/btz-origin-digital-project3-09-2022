import { CategoryHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateCategory: CategoryHandlers["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name,
      },
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updateCategory;
