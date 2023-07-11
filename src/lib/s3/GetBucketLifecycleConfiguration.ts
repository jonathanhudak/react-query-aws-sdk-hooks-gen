
import { GetBucketLifecycleConfigurationCommand, GetBucketLifecycleConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketLifecycleConfiguration({ region, input }: { region?: string, input: GetBucketLifecycleConfigurationCommandInput }) {
  return useQuery(['GetBucketLifecycleConfigurationCommand', input], () => client(region).send(new GetBucketLifecycleConfigurationCommand(input)));
}
