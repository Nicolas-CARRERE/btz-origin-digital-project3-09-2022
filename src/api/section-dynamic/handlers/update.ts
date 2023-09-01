import { SectionDynamicHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateSectionDynamic: SectionDynamicHandlers["update"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const { title, description, max, isGrid, categoryId } = req.body;
    const section = await prisma.section_Dynamic.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        max,
        isGrid,
        categoryId,
      },
    });
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updateSectionDynamic;
