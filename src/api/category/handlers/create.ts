import { CategoryHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createCategory: CategoryHandlers["create"] = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createCategory;
