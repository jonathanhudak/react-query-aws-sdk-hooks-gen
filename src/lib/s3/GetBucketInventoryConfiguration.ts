
import { GetBucketInventoryConfigurationCommand, GetBucketInventoryConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketInventoryConfiguration({ region, input }: { region?: string, input: GetBucketInventoryConfigurationCommandInput }) {
  return useQuery(['GetBucketInventoryConfigurationCommand', input], () => client(region).send(new GetBucketInventoryConfigurationCommand(input)));
}
