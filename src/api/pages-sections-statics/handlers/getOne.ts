import { PageSectionsStaticsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOnePageSectionsStatics: PageSectionsStaticsHandlers["getOne"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const pageSectionsStatics =
      await prisma.pages_Sections_Statics.findUniqueOrThrow({
        where: {
          id: id,
        },
      });

    res.status(200).json(pageSectionsStatics);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getOnePageSectionsStatics;
