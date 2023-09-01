/* eslint-disable no-console */
import { PagesAdvertisingsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOnePageAdvertising: PagesAdvertisingsHandlers["getOne"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const pageAdvertising = await prisma.pages_Advertisings.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(pageAdvertising);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOnePageAdvertising;
