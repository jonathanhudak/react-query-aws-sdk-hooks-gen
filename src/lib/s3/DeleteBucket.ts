
import { DeleteBucketCommand, DeleteBucketCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucket({ region, input }: { region?: string, input: DeleteBucketCommandInput }) {
  return useMutation(['DeleteBucketCommand', input], () => client(region).send(new DeleteBucketCommand(input)));
}
