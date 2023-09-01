import { PageSectionsDynamicsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllPageSectionsDynamics: PageSectionsDynamicsHandlers["getAll"] =
  async (req, res) => {
    try {
      const pagesSectionsDynamics =
        await prisma.pages_Sections_Dynamics.findMany();
      res.status(200).json(pagesSectionsDynamics);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default getAllPageSectionsDynamics;
