import { PageSectionsDynamicsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOnePageSectionsDynamics: PageSectionsDynamicsHandlers["getOne"] =
  async (req, res) => {
    try {
      const { id } = req.params;
      const pageSectionsDynamics =
        await prisma.pages_Sections_Dynamics.findUniqueOrThrow({
          where: {
            id: id,
          },
        });

      res.status(200).json(pageSectionsDynamics);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default getOnePageSectionsDynamics;
