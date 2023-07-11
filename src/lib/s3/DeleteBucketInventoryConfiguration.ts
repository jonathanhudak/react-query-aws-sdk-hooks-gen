
import { DeleteBucketInventoryConfigurationCommand, DeleteBucketInventoryConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketInventoryConfiguration({ region, input }: { region?: string, input: DeleteBucketInventoryConfigurationCommandInput }) {
  return useMutation(['DeleteBucketInventoryConfigurationCommand', input], () => client(region).send(new DeleteBucketInventoryConfigurationCommand(input)));
}
