
import { PutBucketInventoryConfigurationCommand, PutBucketInventoryConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketInventoryConfiguration({ region, input }: { region?: string, input: PutBucketInventoryConfigurationCommandInput }) {
  return useMutation(['PutBucketInventoryConfigurationCommand', input], () => client(region).send(new PutBucketInventoryConfigurationCommand(input)));
}
