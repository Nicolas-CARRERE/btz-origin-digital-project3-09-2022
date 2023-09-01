/* eslint-disable no-console */
import { AdvertisingHandlers } from "../interface";
import prisma from "../../../../prisma/client";
import minioClient from "../../../services/minioClient";

const deleteAdd: AdvertisingHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;

    const advertisingToDelete = await prisma.advertising.delete({
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ message: `${advertisingToDelete.title} has been deleted` });
    minioClient.removeObject(
      "origin",
      `/ads/images/${advertisingToDelete.title}`
    );
    (err: string) => {
      if (err) {
        throw new Error(`${err}`);
      }
    };
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteAdd;
