/* eslint-disable no-console */

import { PassThrough } from "stream";
import minioClient from "../services/minioClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const uploadToS3 = (stream: PassThrough, name: string, metadata: any) =>
  new Promise((resolve, reject) => {
    minioClient.putObject("origin", name, stream, metadata, (err, etag) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      console.log("success", etag);
      resolve(etag);
    });
  });
export default uploadToS3;
