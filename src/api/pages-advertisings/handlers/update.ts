/* eslint-disable no-console */
import { PagesAdvertisingsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updatedPageAdvertising: PagesAdvertisingsHandlers["update"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const { advertisingId, pageId, position } = req.body;
    const updatedPageAdvertising = await prisma.pages_Advertisings.update({
      where: {
        id,
      },
      data: {
        advertisingId,
        pageId,
        position,
      },
    });
    res.status(200).json(updatedPageAdvertising);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updatedPageAdvertising;
