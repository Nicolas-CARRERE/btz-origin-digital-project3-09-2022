/* eslint-disable no-console */
import { FavoriteHandlers } from "../interface";

import prisma from "../../../../prisma/client";

const isFavorite: FavoriteHandlers["isFavorite"] = async (req, res) => {
  const { id } = req.user;
  try {
    const { videoId } = req.params || { videoId: "" };
    const favorite = await prisma.favorite.findFirst({
      where: {
        userId: id,
        videoId: videoId,
      },
    });

    res.status(200).json(favorite);

    // if (favorite.length > 0) {
    //   res.status(200).json(true);
    // } else {
    //   res.status(200).json(false);
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default isFavorite;
