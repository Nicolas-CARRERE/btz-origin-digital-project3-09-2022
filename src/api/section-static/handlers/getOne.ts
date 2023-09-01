import { SectionStaticHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneSectionStatic: SectionStaticHandlers["getOne"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const section = await prisma.section_Static.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        videos: true,
      },
    });

    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getOneSectionStatic;
