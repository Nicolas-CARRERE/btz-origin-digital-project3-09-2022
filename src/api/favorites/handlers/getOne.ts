/* eslint-disable no-console */
import { FavoriteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneFavorite: FavoriteHandlers["getOne"] = async (req, res) => {
  const { id } = req.user;

  try {
    const { videoId } = req.params || { videoId: "" };
    const favorite = await prisma.favorite.findFirst({
      where: {
        userId: id,
        videoId: videoId,
      },
    });

    if (favorite) res.status(200).json(favorite);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneFavorite;
