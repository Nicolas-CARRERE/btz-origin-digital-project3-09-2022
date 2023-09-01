/* eslint-disable no-console */
import { VideoHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneVideo: VideoHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await prisma.video.findFirstOrThrow({
      where: { id },
    });
    res.status(200).json(video);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneVideo;
