
import { ListBucketAnalyticsConfigurationsCommand, ListBucketAnalyticsConfigurationsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListBucketAnalyticsConfigurations({ region, input }: { region?: string, input: ListBucketAnalyticsConfigurationsCommandInput }) {
  return useQuery(['ListBucketAnalyticsConfigurationsCommand', input], () => client(region).send(new ListBucketAnalyticsConfigurationsCommand(input)));
}
