/* eslint-disable no-console */
import { PagesAdvertisingsHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deletePageAdvertising: PagesAdvertisingsHandlers["delete"] = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    await prisma.pages_Advertisings.delete({
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ message: `The Page_Advertising relation has been deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deletePageAdvertising;
