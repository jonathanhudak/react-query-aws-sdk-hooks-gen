
import { GetObjectRetentionCommand, GetObjectRetentionCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetObjectRetention({ region, input }: { region?: string, input: GetObjectRetentionCommandInput }) {
  return useQuery(['GetObjectRetentionCommand', input], () => client(region).send(new GetObjectRetentionCommand(input)));
}
