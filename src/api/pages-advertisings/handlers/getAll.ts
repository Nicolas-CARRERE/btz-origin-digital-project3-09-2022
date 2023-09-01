/* eslint-disable no-console */
import { PagesAdvertisingsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllPagesAdvertisings: PagesAdvertisingsHandlers["getAll"] = async (
  req,
  res
) => {
  try {
    const pagesAdvertisings = await prisma.pages_Advertisings.findMany();
    res.status(200).json(pagesAdvertisings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllPagesAdvertisings;
