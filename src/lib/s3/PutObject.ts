
import { PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutObject({ region, input }: { region?: string, input: PutObjectCommandInput }) {
  return useMutation(['PutObjectCommand', input], () => client(region).send(new PutObjectCommand(input)));
}
