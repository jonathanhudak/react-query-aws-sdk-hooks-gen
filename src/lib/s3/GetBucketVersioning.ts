
import { GetBucketVersioningCommand, GetBucketVersioningCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketVersioning({ region, input }: { region?: string, input: GetBucketVersioningCommandInput }) {
  return useQuery(['GetBucketVersioningCommand', input], () => client(region).send(new GetBucketVersioningCommand(input)));
}
