
import { PutBucketReplicationCommand, PutBucketReplicationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketReplication({ region, input }: { region?: string, input: PutBucketReplicationCommandInput }) {
  return useMutation(['PutBucketReplicationCommand', input], () => client(region).send(new PutBucketReplicationCommand(input)));
}
