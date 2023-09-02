/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { AdvertisingHandlers } from "../interface";
import prisma from "../../../../prisma/client";
import { asyncFormParse } from "../../../utils/formParser";
import minioClient from "../../../services/minioClient";
import fs from "fs";
import fileType from "file-type";

const createAdd: AdvertisingHandlers["create"] = async (req, res) => {
  try {
    const { files, fields } = await asyncFormParse(req);

    const file = fs.readFileSync(files.file[0].path);

    const type = await fileType.fromBuffer(file);

    const metadata = {
      "Content-type": type?.mime,
    };

    minioClient.putObject(
      "origin",
      `/ads/images/${fields.title.join("")}`,
      file,
      metadata as any,
      (err, etag) => {
        if (err) {
          throw new Error(`${err}`);
        }
      }
    );

    const advertisingToCreate = await prisma.advertising.create({
      data: {
        description: fields.description.join(""),
        imageUrl: `https://${
          process.env.MINIO_ENDPOINT
        }/origin/ads/images/${fields.title.join("")}`,
        linkTo: fields.linkTo.join(""),
        title: fields.title.join(""),
      },
    });
    res.status(200).json(advertisingToCreate);
    // res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createAdd;
