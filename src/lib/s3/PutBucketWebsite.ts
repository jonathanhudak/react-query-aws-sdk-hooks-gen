
import { PutBucketWebsiteCommand, PutBucketWebsiteCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketWebsite({ region, input }: { region?: string, input: PutBucketWebsiteCommandInput }) {
  return useMutation(['PutBucketWebsiteCommand', input], () => client(region).send(new PutBucketWebsiteCommand(input)));
}
