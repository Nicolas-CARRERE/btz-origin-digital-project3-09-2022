/* eslint-disable no-console */
import { FavoriteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllFavorites: FavoriteHandlers["getAll"] = async (req, res) => {
  const { id } = req.user;
  // const { limit } = req.query;

  try {
    const favorites = await prisma.favorite.findMany({
      where: {
        userId: id,
      },
      include: {
        video: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const videos = favorites.map((favorite) => favorite.video);

    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllFavorites;
