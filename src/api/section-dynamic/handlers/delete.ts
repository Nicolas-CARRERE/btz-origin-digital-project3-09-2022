import { SectionDynamicHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneSectionDynamicHandlers: SectionDynamicHandlers["delete"] =
  async (req, res) => {
    try {
      const { id } = req.params;
      const section = await prisma.section_Dynamic.delete({
        where: {
          id: id,
        },
      });

      if (!section) {
        return res.status(404).json({ message: "Dynamic section not found" });
      }

      res.status(200).json({ message: "Dynamic section deleted" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default deleteOneSectionDynamicHandlers;
