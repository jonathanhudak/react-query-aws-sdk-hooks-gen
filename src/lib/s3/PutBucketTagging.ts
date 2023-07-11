
import { PutBucketTaggingCommand, PutBucketTaggingCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketTagging({ region, input }: { region?: string, input: PutBucketTaggingCommandInput }) {
  return useMutation(['PutBucketTaggingCommand', input], () => client(region).send(new PutBucketTaggingCommand(input)));
}
