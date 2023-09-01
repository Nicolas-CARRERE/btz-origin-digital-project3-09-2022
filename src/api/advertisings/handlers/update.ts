/* eslint-disable no-console */
import { AdvertisingHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateAdvertising: AdvertisingHandlers["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, imageUrl, linkTo, title } = req.body;

    const updatedAdvertising = await prisma.advertising.update({
      where: {
        id,
      },
      data: {
        description,
        imageUrl,
        linkTo,
        title,
      },
    });
    res.status(200).json(updatedAdvertising);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateAdvertising;
