import { Video } from "@prisma/client";
/* eslint-disable no-console */
import { VideoHandlers } from "../interface";
import prisma from "../../../../prisma/client";

type Contains = string;

const searchVideos: VideoHandlers["search"] = async (req, res) => {
  try {
    const { keyword } = req.query;
    const videos: Video[] = await prisma.video.findMany({
      where: {
        OR: [
          {
            title: {
              contains: keyword as Contains,
            },
          },
          { description: { contains: keyword as Contains } },
        ],
      },
    });
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default searchVideos;
