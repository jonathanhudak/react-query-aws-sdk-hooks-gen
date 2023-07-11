
import { DeleteBucketIntelligentTieringConfigurationCommand, DeleteBucketIntelligentTieringConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketIntelligentTieringConfiguration({ region, input }: { region?: string, input: DeleteBucketIntelligentTieringConfigurationCommandInput }) {
  return useMutation(['DeleteBucketIntelligentTieringConfigurationCommand', input], () => client(region).send(new DeleteBucketIntelligentTieringConfigurationCommand(input)));
}
