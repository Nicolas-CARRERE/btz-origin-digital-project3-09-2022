import { SectionStaticHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createSectionStatic: SectionStaticHandlers["create"] = async (
  req,
  res
) => {
  try {
    const { title, description, isHero } = req.body;
    const newSection = await prisma.section_Static.create({
      data: {
        title,
        description,
        isHero,
      },
    });
    res.status(201).json(newSection);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createSectionStatic;
