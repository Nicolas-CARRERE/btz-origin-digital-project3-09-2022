import { SectionStaticHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateSectionStatic: SectionStaticHandlers["update"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const { title, description, isHero } = req.body;
    const section = await prisma.section_Static.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        isHero,
      },
    });
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updateSectionStatic;
