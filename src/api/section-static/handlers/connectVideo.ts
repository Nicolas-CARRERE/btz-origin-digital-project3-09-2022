import { SectionStaticHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const connectVideoOnSectionStatic: SectionStaticHandlers["connectVideo"] =
  async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, isHero, videoId } = req.body;
      const section = await prisma.section_Static.update({
        where: {
          id: id,
        },
        data: {
          title,
          description,
          isHero,
          videos: {
            connect: {
              id: videoId,
            },
          },
        },
      });
      res.status(201).json(section);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export default connectVideoOnSectionStatic;
