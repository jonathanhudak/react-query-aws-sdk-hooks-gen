
import { GetBucketAnalyticsConfigurationCommand, GetBucketAnalyticsConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketAnalyticsConfiguration({ region, input }: { region?: string, input: GetBucketAnalyticsConfigurationCommandInput }) {
  return useQuery(['GetBucketAnalyticsConfigurationCommand', input], () => client(region).send(new GetBucketAnalyticsConfigurationCommand(input)));
}
