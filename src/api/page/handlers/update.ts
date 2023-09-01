import { PageHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updatePage: PageHandlers["update"] = async (req, res) => {
  try {
    const {
      title,
      display,
      pagesSectionsStaticData,
      pagesSectionsDynamicData,
      pagesAdvertisingsData,
    } = req.body;
    const pageId = req.params.id;
    // First, get elements to disconnect
    const page = await prisma.page.findUnique({
      where: {
        id: pageId,
      },
      include: {
        pagesSectionsStatic: true,
        pagesSectionsDynamic: true,
        pagesAdvertisings: true,
      },
    });

    // Then, disconnect elements
    await prisma.page.update({
      where: {
        id: pageId,
      },
      data: {
        pagesSectionsStatic: {
          delete: page?.pagesSectionsStatic?.map((section) => ({
            id: section.id,
          })),
        },
        pagesSectionsDynamic: {
          delete: page?.pagesSectionsDynamic?.map((section) => ({
            id: section.id,
          })),
        },
        pagesAdvertisings: {
          delete: page?.pagesAdvertisings?.map((section) => ({
            id: section.id,
          })),
        },
      },
    });

    // Then, connect new advertisings to this page
    const newUpdatedPage = await prisma.page.update({
      where: {
        id: pageId,
      },
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
    res.status(201).json(newUpdatedPage);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updatePage;
