
import { PutBucketAclCommand, PutBucketAclCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketAcl({ region, input }: { region?: string, input: PutBucketAclCommandInput }) {
  return useMutation(['PutBucketAclCommand', input], () => client(region).send(new PutBucketAclCommand(input)));
}
