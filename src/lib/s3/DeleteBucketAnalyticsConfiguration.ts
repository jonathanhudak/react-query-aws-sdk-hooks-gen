
import { DeleteBucketAnalyticsConfigurationCommand, DeleteBucketAnalyticsConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketAnalyticsConfiguration({ region, input }: { region?: string, input: DeleteBucketAnalyticsConfigurationCommandInput }) {
  return useMutation(['DeleteBucketAnalyticsConfigurationCommand', input], () => client(region).send(new DeleteBucketAnalyticsConfigurationCommand(input)));
}
