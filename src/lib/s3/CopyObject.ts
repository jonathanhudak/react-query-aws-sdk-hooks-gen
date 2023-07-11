
import { CopyObjectCommand, CopyObjectCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useCopyObject({ region, input }: { region?: string, input: CopyObjectCommandInput }) {
  return useQuery(['CopyObjectCommand', input], () => client(region).send(new CopyObjectCommand(input)));
}
