
import { GetBucketNotificationConfigurationCommand, GetBucketNotificationConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketNotificationConfiguration({ region, input }: { region?: string, input: GetBucketNotificationConfigurationCommandInput }) {
  return useQuery(['GetBucketNotificationConfigurationCommand', input], () => client(region).send(new GetBucketNotificationConfigurationCommand(input)));
}
