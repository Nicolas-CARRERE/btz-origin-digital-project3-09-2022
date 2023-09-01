import * as minio from "minio";

const { MINIO_ENDPOINT, MINIO_USERNAME, MINIO_PASSWORD } = process.env;

const minioClient = new minio.Client({
  endPoint: MINIO_ENDPOINT || "endPoint missing",
  accessKey: MINIO_USERNAME || "username missing",
  secretKey: MINIO_PASSWORD || "password missing",
  useSSL: true,
  partSize: 10 * 1024 * 1024,
});

export default minioClient;
