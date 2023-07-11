
import { ListBucketMetricsConfigurationsCommand, ListBucketMetricsConfigurationsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListBucketMetricsConfigurations({ region, input }: { region?: string, input: ListBucketMetricsConfigurationsCommandInput }) {
  return useQuery(['ListBucketMetricsConfigurationsCommand', input], () => client(region).send(new ListBucketMetricsConfigurationsCommand(input)));
}
