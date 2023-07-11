
import { PutBucketLifecycleConfigurationCommand, PutBucketLifecycleConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketLifecycleConfiguration({ region, input }: { region?: string, input: PutBucketLifecycleConfigurationCommandInput }) {
  return useMutation(['PutBucketLifecycleConfigurationCommand', input], () => client(region).send(new PutBucketLifecycleConfigurationCommand(input)));
}
