
import { CreateMultipartUploadCommand, CreateMultipartUploadCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useCreateMultipartUpload({ region, input }: { region?: string, input: CreateMultipartUploadCommandInput }) {
  return useMutation(['CreateMultipartUploadCommand', input], () => client(region).send(new CreateMultipartUploadCommand(input)));
}
