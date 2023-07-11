
import { PutBucketCorsCommand, PutBucketCorsCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketCors({ region, input }: { region?: string, input: PutBucketCorsCommandInput }) {
  return useMutation(['PutBucketCorsCommand', input], () => client(region).send(new PutBucketCorsCommand(input)));
}
