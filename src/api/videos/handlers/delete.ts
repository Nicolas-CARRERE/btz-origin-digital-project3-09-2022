/* eslint-disable no-console */
import { VideoHandlers } from "../interface";
import prisma from "../../../../prisma/client";
import minioClient from "../../../services/minioClient";

const deleteVideo: VideoHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const videoToDelete = await prisma.video.delete({
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ message: `${videoToDelete.title} has been deleted` });
    const videoMinioPathToDelete = (initialPath: string) => {
      const splitedPath = initialPath.split("/");
      return `/${splitedPath.slice(splitedPath.length - 2).join("/")}`;
    };

    minioClient.removeObjects("origin", [
      `${videoMinioPathToDelete(videoToDelete.videoUrl)}`,
      `${videoMinioPathToDelete(videoToDelete.thumbnailUrl)}`,
      `${videoMinioPathToDelete(videoToDelete.teaserUrl)}`,
    ]);

    (err: string) => {
      if (err) {
        throw new Error(`${err}`);
      }
    };
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteVideo;
