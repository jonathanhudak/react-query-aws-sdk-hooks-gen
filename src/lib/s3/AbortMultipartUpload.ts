
import { AbortMultipartUploadCommand, AbortMultipartUploadCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useAbortMultipartUpload({ region, input }: { region?: string, input: AbortMultipartUploadCommandInput }) {
  return useQuery(['AbortMultipartUploadCommand', input], () => client(region).send(new AbortMultipartUploadCommand(input)));
}
