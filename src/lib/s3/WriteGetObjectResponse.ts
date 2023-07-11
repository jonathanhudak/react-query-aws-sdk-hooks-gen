
import { WriteGetObjectResponseCommand, WriteGetObjectResponseCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useWriteGetObjectResponse({ region, input }: { region?: string, input: WriteGetObjectResponseCommandInput }) {
  return useQuery(['WriteGetObjectResponseCommand', input], () => client(region).send(new WriteGetObjectResponseCommand(input)));
}
