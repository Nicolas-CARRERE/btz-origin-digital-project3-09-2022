import { PageSectionsDynamicsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOnePageSectionsDynamics: PageSectionsDynamicsHandlers["delete"] =
  async (req, res) => {
    try {
      const { id } = req.params;
      const pageSectionsDynamics = await prisma.pages_Sections_Dynamics.delete({
        where: {
          id: id,
        },
      });

      if (!pageSectionsDynamics) {
        return res
          .status(404)
          .json({ message: "Page-dynamic-section not found" });
      }

      res.status(200).json({ message: "Page-dynamic-section deleted" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default deleteOnePageSectionsDynamics;
