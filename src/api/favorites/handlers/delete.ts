import { FavoriteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteFavorite: FavoriteHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const favorite = await prisma.favorite.delete({
      where: {
        id,
      },
    });

    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json({ message: "Favorite deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteFavorite;
