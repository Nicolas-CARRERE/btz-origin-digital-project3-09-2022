import { SectionDynamicHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneSectionDynamic: SectionDynamicHandlers["getOne"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const section = await prisma.section_Dynamic.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        categories: {
          include: {
            videos: true,
          },
        },
      },
    });

    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getOneSectionDynamic;
