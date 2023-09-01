/* eslint-disable no-console */
import { AdvertisingHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllAdvertisings: AdvertisingHandlers["getAll"] = async (req, res) => {
  try {
    const advertisings = await prisma.advertising.findMany();
    res.status(200).json(advertisings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllAdvertisings;
