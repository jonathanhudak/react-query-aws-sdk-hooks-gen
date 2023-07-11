
import { DeleteBucketOwnershipControlsCommand, DeleteBucketOwnershipControlsCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketOwnershipControls({ region, input }: { region?: string, input: DeleteBucketOwnershipControlsCommandInput }) {
  return useMutation(['DeleteBucketOwnershipControlsCommand', input], () => client(region).send(new DeleteBucketOwnershipControlsCommand(input)));
}
