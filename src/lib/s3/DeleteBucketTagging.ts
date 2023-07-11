
import { DeleteBucketTaggingCommand, DeleteBucketTaggingCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketTagging({ region, input }: { region?: string, input: DeleteBucketTaggingCommandInput }) {
  return useMutation(['DeleteBucketTaggingCommand', input], () => client(region).send(new DeleteBucketTaggingCommand(input)));
}
