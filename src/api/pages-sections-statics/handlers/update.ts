import { PageSectionsStaticsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updatePageSectionsStatics: PageSectionsStaticsHandlers["update"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const { position, pageId, sectionsStaticId } = req.body;
    const page = await prisma.pages_Sections_Statics.update({
      where: {
        id: id,
      },
      data: {
        position,
        pageId,
        sectionsStaticId,
      },
    });
    res.status(201).json(page);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updatePageSectionsStatics;
