import { PageHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOnePage: PageHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await prisma.page.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        pagesAdvertisings: {
          include: {
            advertisings: true,
          },
        },
        pagesSectionsDynamic: {
          include: {
            sectionsDynamic: {
              include: {
                categories: {
                  include: {
                    videos: true,
                  },
                },
              },
            },
          },
        },
        pagesSectionsStatic: {
          include: {
            sectionsStatics: {
              include: {
                videos: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getOnePage;
