
import { GetBucketReplicationCommand, GetBucketReplicationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketReplication({ region, input }: { region?: string, input: GetBucketReplicationCommandInput }) {
  return useQuery(['GetBucketReplicationCommand', input], () => client(region).send(new GetBucketReplicationCommand(input)));
}
