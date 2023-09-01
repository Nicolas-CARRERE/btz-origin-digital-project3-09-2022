import { SectionStaticHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllSectionsStatic: SectionStaticHandlers["getAll"] = async (
  req,
  res
) => {
  try {
    const sections = await prisma.section_Static.findMany({
      include: {
        videos: true,
      },
    });
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllSectionsStatic;
