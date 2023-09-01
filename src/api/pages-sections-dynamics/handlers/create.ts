import { PageSectionsDynamicsHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const createPageSectionsDynamics: PageSectionsDynamicsHandlers["create"] =
  async (req, res) => {
    try {
      const { position, pageId, sectionsDynamicId } = req.body;
      const newPageSectionsDynamic =
        await prisma.pages_Sections_Dynamics.create({
          data: {
            position,
            pageId,
            sectionsDynamicId,
          },
        });
      res.status(201).json(newPageSectionsDynamic);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default createPageSectionsDynamics;
