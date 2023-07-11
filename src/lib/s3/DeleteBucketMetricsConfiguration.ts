
import { DeleteBucketMetricsConfigurationCommand, DeleteBucketMetricsConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketMetricsConfiguration({ region, input }: { region?: string, input: DeleteBucketMetricsConfigurationCommandInput }) {
  return useMutation(['DeleteBucketMetricsConfigurationCommand', input], () => client(region).send(new DeleteBucketMetricsConfigurationCommand(input)));
}
