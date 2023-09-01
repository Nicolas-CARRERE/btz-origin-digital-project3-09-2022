import { SectionStaticHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneSectionStaticHandlers: SectionStaticHandlers["delete"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const section = await prisma.section_Static.delete({
      where: {
        id: id,
      },
    });

    if (!section) {
      return res.status(404).json({ message: "Static section not found" });
    }

    res.status(200).json({ message: "Static section deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteOneSectionStaticHandlers;
