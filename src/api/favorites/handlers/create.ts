import { FavoriteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createFavorite: FavoriteHandlers["create"] = async (req, res) => {
  try {
    const { id } = req.user;
    const { videoId } = req.body;
    const newFavorite = await prisma.favorite.create({
      data: {
        userId: id,
        videoId,
      },
    });
    res.status(201).json(newFavorite);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createFavorite;
