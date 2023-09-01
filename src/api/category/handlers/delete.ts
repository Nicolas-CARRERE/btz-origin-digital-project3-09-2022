import { CategoryHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneCategory: CategoryHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.delete({
      where: {
        id: id,
      },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteOneCategory;
