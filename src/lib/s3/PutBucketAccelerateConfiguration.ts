
import { PutBucketAccelerateConfigurationCommand, PutBucketAccelerateConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketAccelerateConfiguration({ region, input }: { region?: string, input: PutBucketAccelerateConfigurationCommandInput }) {
  return useMutation(['PutBucketAccelerateConfigurationCommand', input], () => client(region).send(new PutBucketAccelerateConfigurationCommand(input)));
}
