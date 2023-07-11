
import { RestoreObjectCommand, RestoreObjectCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useRestoreObject({ region, input }: { region?: string, input: RestoreObjectCommandInput }) {
  return useQuery(['RestoreObjectCommand', input], () => client(region).send(new RestoreObjectCommand(input)));
}
