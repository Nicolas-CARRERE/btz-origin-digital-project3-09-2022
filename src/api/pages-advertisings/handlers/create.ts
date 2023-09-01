/* eslint-disable no-console */
import { PagesAdvertisingsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createPageAdvertising: PagesAdvertisingsHandlers["create"] = async (
  req,
  res
) => {
  try {
    const { advertisingId, pageId, position } = req.body;
    const pageAdvertisingToCreate = await prisma.pages_Advertisings.create({
      data: {
        advertisingId,
        pageId,
        position,
      },
    });
    res.status(200).json(pageAdvertisingToCreate);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createPageAdvertising;
