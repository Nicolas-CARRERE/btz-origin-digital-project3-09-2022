import { SectionStaticHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createSectionStaticWithVideos: SectionStaticHandlers["createWithVideos"] =
  async (req, res) => {
    try {
      const { title, description, isHero, videoIds } = req.body;
      const newSection = await prisma.section_Static.create({
        data: {
          title,
          description,
          isHero,
          videos: {
            connect: videoIds
              .filter((item) => item.status)
              .map((item) => ({ id: item.id })),
          },
        },
      });
      res.status(201).json(newSection);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default createSectionStaticWithVideos;
