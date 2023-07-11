
import { CompleteMultipartUploadCommand, CompleteMultipartUploadCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useCompleteMultipartUpload({ region, input }: { region?: string, input: CompleteMultipartUploadCommandInput }) {
  return useQuery(['CompleteMultipartUploadCommand', input], () => client(region).send(new CompleteMultipartUploadCommand(input)));
}
