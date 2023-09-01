/* eslint-disable no-console */
import { VideoHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllVideos: VideoHandlers["getAll"] = async (req, res) => {
  try {
    const category: string | undefined = req.query.category as string;
    const videos = await prisma.video.findMany({
      where: category ? { categoryId: category } : undefined,
      select: {
        id: true,
        display: true,
        createdAt: true,
        categoryId: true,
        description: true,
        isPublic: true,
        videoUrl: true,
        duration: true,
        nbViews: true,
        teaserUrl: true,
        thumbnailUrl: true,
        title: true,
        updatedAt: true,
      },
    });
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllVideos;
