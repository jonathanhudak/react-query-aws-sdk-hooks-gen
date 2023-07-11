
import { UploadPartCopyCommand, UploadPartCopyCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useUploadPartCopy({ region, input }: { region?: string, input: UploadPartCopyCommandInput }) {
  return useQuery(['UploadPartCopyCommand', input], () => client(region).send(new UploadPartCopyCommand(input)));
}
