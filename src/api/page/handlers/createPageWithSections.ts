import { PageHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createPageWithSections: PageHandlers["createWithSections"] = async (
  req,
  res
) => {
  try {
    const {
      title,
      display,
      pagesSectionsStaticData,
      pagesSectionsDynamicData,
      pagesAdvertisingsData,
    } = req.body;

    const newPage = await prisma.page.create({
      data: {
        title,
        display,
        pagesSectionsStatic: {
          create: pagesSectionsStaticData?.map((section) => ({
            position: section.position,
            sectionsStatics: {
              connect: {
                id: section.id,
              },
            },
          })),
        },
        pagesSectionsDynamic: {
          create: pagesSectionsDynamicData?.map((section) => ({
            position: section.position,
            sectionsDynamic: {
              connect: {
                id: section.id,
              },
            },
          })),
        },
        pagesAdvertisings: {
          create: pagesAdvertisingsData?.map((section) => ({
            position: section.position,
            advertisings: {
              connect: {
                id: section.id,
              },
            },
          })),
        },
      },
    });
    res.status(201).json(newPage);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createPageWithSections;
