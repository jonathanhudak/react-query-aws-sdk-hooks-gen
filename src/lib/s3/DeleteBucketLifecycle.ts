
import { DeleteBucketLifecycleCommand, DeleteBucketLifecycleCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketLifecycle({ region, input }: { region?: string, input: DeleteBucketLifecycleCommandInput }) {
  return useMutation(['DeleteBucketLifecycleCommand', input], () => client(region).send(new DeleteBucketLifecycleCommand(input)));
}
