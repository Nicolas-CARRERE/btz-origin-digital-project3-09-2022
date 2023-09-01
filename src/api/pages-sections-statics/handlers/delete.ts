import { PageSectionsStaticsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOnePageSectionsStatics: PageSectionsStaticsHandlers["delete"] =
  async (req, res) => {
    try {
      const { id } = req.params;
      const pageSectionsStatics = await prisma.pages_Sections_Statics.delete({
        where: {
          id: id,
        },
      });

      if (!pageSectionsStatics) {
        return res
          .status(404)
          .json({ message: "Page-dynamic-section not found" });
      }

      res.status(200).json({ message: "Page-dynamic-section deleted" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default deleteOnePageSectionsStatics;
