import { PageSectionsDynamicsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updatePageSectionsDynamics: PageSectionsDynamicsHandlers["update"] =
  async (req, res) => {
    try {
      const { id } = req.params;
      const { position, pageId, sectionsDynamicId } = req.body;
      const page = await prisma.pages_Sections_Dynamics.update({
        where: {
          id: id,
        },
        data: {
          position,
          pageId,
          sectionsDynamicId,
        },
      });
      res.status(201).json(page);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default updatePageSectionsDynamics;
