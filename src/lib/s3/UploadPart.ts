
import { UploadPartCommand, UploadPartCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useUploadPart({ region, input }: { region?: string, input: UploadPartCommandInput }) {
  return useQuery(['UploadPartCommand', input], () => client(region).send(new UploadPartCommand(input)));
}
