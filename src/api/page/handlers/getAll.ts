import { PageHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllPages: PageHandlers["getAll"] = async (req, res) => {
  try {
    const display = req.query.display;
    const pages = await prisma.page.findMany({
      where: display === "true" ? { display: true } : {},
      include: {
        pagesSectionsStatic: true,
        pagesSectionsDynamic: true,
        pagesAdvertisings: true,
      },
    });
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllPages;
