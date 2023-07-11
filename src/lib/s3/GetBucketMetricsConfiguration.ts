
import { GetBucketMetricsConfigurationCommand, GetBucketMetricsConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketMetricsConfiguration({ region, input }: { region?: string, input: GetBucketMetricsConfigurationCommandInput }) {
  return useQuery(['GetBucketMetricsConfigurationCommand', input], () => client(region).send(new GetBucketMetricsConfigurationCommand(input)));
}
