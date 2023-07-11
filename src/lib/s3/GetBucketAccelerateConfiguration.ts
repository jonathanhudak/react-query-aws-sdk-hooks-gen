
import { GetBucketAccelerateConfigurationCommand, GetBucketAccelerateConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketAccelerateConfiguration({ region, input }: { region?: string, input: GetBucketAccelerateConfigurationCommandInput }) {
  return useQuery(['GetBucketAccelerateConfigurationCommand', input], () => client(region).send(new GetBucketAccelerateConfigurationCommand(input)));
}
