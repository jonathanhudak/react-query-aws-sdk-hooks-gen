
import { PutBucketAnalyticsConfigurationCommand, PutBucketAnalyticsConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketAnalyticsConfiguration({ region, input }: { region?: string, input: PutBucketAnalyticsConfigurationCommandInput }) {
  return useMutation(['PutBucketAnalyticsConfigurationCommand', input], () => client(region).send(new PutBucketAnalyticsConfigurationCommand(input)));
}
