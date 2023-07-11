import { S3Client } from "@aws-sdk/client-s3";

export default (region = "us-west-2") =>
  new S3Client({
    region,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });
