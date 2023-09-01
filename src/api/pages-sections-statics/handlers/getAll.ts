import { PageSectionsStaticsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllPageSectionsStatics: PageSectionsStaticsHandlers["getAll"] = async (
  req,
  res
) => {
  try {
    const pagesSectionsStatics = await prisma.pages_Sections_Statics.findMany();
    res.status(200).json(pagesSectionsStatics);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllPageSectionsStatics;
