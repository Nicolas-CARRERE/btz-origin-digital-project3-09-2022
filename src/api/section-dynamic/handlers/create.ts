import { SectionDynamicHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createSectionDynamic: SectionDynamicHandlers["create"] = async (
  req,
  res
) => {
  try {
    const { title, description, max, isGrid, categoryId } = req.body;
    const newSection = await prisma.section_Dynamic.create({
      data: {
        title,
        description,
        max,
        isGrid,
        categoryId,
      },
    });
    res.status(201).json(newSection);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createSectionDynamic;
