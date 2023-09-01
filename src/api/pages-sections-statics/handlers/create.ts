import { PageSectionsStaticsHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const createPageSectionsStatics: PageSectionsStaticsHandlers["create"] = async (
  req,
  res
) => {
  try {
    const { position, pageId, sectionsStaticId } = req.body;
    const newPageSectionsStatic = await prisma.pages_Sections_Statics.create({
      data: {
        position,
        pageId,
        sectionsStaticId,
      },
    });
    res.status(201).json(newPageSectionsStatic);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createPageSectionsStatics;
