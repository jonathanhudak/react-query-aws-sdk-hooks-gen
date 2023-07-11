
import { PutBucketMetricsConfigurationCommand, PutBucketMetricsConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketMetricsConfiguration({ region, input }: { region?: string, input: PutBucketMetricsConfigurationCommandInput }) {
  return useMutation(['PutBucketMetricsConfigurationCommand', input], () => client(region).send(new PutBucketMetricsConfigurationCommand(input)));
}
