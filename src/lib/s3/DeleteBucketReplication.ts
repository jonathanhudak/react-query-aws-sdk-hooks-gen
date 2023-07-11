
import { DeleteBucketReplicationCommand, DeleteBucketReplicationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketReplication({ region, input }: { region?: string, input: DeleteBucketReplicationCommandInput }) {
  return useMutation(['DeleteBucketReplicationCommand', input], () => client(region).send(new DeleteBucketReplicationCommand(input)));
}
