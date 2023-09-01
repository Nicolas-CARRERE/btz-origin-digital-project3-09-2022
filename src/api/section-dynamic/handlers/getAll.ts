import { SectionDynamicHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllSectionsDynamic: SectionDynamicHandlers["getAll"] = async (
  req,
  res
) => {
  try {
    const sections = await prisma.section_Dynamic.findMany();
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllSectionsDynamic;
