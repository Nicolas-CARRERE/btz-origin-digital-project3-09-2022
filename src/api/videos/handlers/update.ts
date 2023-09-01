/* eslint-disable no-console */
import { VideoHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateVideo: VideoHandlers["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      categoryId,
      description,
      display,
      duration,
      isPublic,
      teaserUrl,
      thumbnailUrl,
      title,
      videoUrl,
    } = req.body;
    const updatedVideo = await prisma.video.update({
      where: {
        id,
      },
      data: {
        categoryId,
        description,
        display,
        duration,
        isPublic,
        teaserUrl,
        thumbnailUrl,
        title,
        videoUrl,
      },
    });
    res.status(200).json(updatedVideo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateVideo;
