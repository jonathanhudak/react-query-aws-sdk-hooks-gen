
import { PutBucketOwnershipControlsCommand, PutBucketOwnershipControlsCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketOwnershipControls({ region, input }: { region?: string, input: PutBucketOwnershipControlsCommandInput }) {
  return useMutation(['PutBucketOwnershipControlsCommand', input], () => client(region).send(new PutBucketOwnershipControlsCommand(input)));
}
