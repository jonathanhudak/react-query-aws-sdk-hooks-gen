
import { ListBucketInventoryConfigurationsCommand, ListBucketInventoryConfigurationsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListBucketInventoryConfigurations({ region, input }: { region?: string, input: ListBucketInventoryConfigurationsCommandInput }) {
  return useQuery(['ListBucketInventoryConfigurationsCommand', input], () => client(region).send(new ListBucketInventoryConfigurationsCommand(input)));
}
