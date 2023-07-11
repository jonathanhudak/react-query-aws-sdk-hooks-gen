
import { PutBucketPolicyCommand, PutBucketPolicyCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketPolicy({ region, input }: { region?: string, input: PutBucketPolicyCommandInput }) {
  return useMutation(['PutBucketPolicyCommand', input], () => client(region).send(new PutBucketPolicyCommand(input)));
}
