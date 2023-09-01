/* eslint-disable no-console */
import { AdvertisingHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneAdvertising: AdvertisingHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const advertising = await prisma.advertising.findFirstOrThrow({
      where: { id },
    });
    res.status(200).json(advertising);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneAdvertising;
