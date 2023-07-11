
import { PutBucketNotificationConfigurationCommand, PutBucketNotificationConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketNotificationConfiguration({ region, input }: { region?: string, input: PutBucketNotificationConfigurationCommandInput }) {
  return useMutation(['PutBucketNotificationConfigurationCommand', input], () => client(region).send(new PutBucketNotificationConfigurationCommand(input)));
}
